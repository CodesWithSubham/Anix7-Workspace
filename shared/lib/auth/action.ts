"use server";

import { cookies } from "next/headers";
import { signIn, signOut } from ".";
import { hash } from "bcryptjs";
import getSignUpOtpModel from "../db/models/SignUpOtp";
import getUserModel from "../db/models/User";
import { signupSchema } from "../zod";
import { sendNoReplyMail } from "../sendMail";
import { ZodError } from "zod";
import { verifyMail } from "@shared/components/ui/mail";

const RETRY_INTERVAL = 10 * 60 * 1000; // 30 minutes
const MAX_ATTEMPTS = 5;

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");
  const referralId = formData.get("referCode");
  if (!action || typeof action !== "string") {
    throw new Error("Invalid action");
  }

  if (typeof referralId === "string" && referralId.length > 0) {
    const c = await cookies();
    c.set("referral_id", referralId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 24 * 60 * 60, // 1 day
    });
  }

  await signIn(action, { redirectTo: "/" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin({ email, password }: { email: string; password: string }) {
  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return response;
  } catch (error) {
    if (error && typeof error === "object" && "type" in error) {
      switch ((error as { type?: string }).type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    return { error: "Unexpected error" };
  }
}

async function sendEmail(email: string, firstName: string, lastName: string, otp: string) {
  try {
    const { props } = verifyMail({
      userName: firstName + (lastName ? " " + lastName : ""),
      userEmail: email,
      otp: otp,
      profilePicLink: "https://i.ibb.co/1JGDTytY/default-Profile-Pic.webp",
    });

    const res = await sendNoReplyMail({
      sendTo: email,
      subject: "Verify your email address",
      fromName: "Anix7 - Tools (Verification)",
      html: props.children,
    });
    if (!res.success) throw new Error("Error sending email");
  } catch (error) {
    console.error("Error sending verification email:", error);

    throw new Error("Error sending email");
  }
}

export async function signUpVerificationSendOtp(data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePic?: string;
  referredBy?: string | null;
}) {
  try {
    if (!data || typeof data !== "object") {
      return { success: false, message: "Invalid input data." };
    }
    // Validate and sanitize input using Zod
    const validatedData = await signupSchema.parseAsync({ ...data });
    const { firstName, lastName, email } = validatedData;

    if (!firstName || !email) {
      return { success: false, message: "Missing required fields." };
    }

    // Check if required fields are present
    if (!firstName || !email) {
      return { success: false, message: "Missing required fields." };
    }
    // Connect to MongoDB
    const User = await getUserModel();
    const SignUpOtp = await getSignUpOtpModel();

    const now = Date.now();

    const validEmail = email.toLowerCase().replace(/\+.*(?=@)/, "");

    // Check if the user already exists
    const userExists = await User.findOne({ email: validEmail });
    if (userExists) {
      return { success: false, message: "Email is already in use.", errorPath: "email" };
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // Find existing OTP record
    const oldOtp = await SignUpOtp.findOne({ email: validEmail });

    if (oldOtp && oldOtp.firstTry && oldOtp.lastTry) {
      const timeElapsed = now - oldOtp.firstTry.getTime();
      const isBlocked = oldOtp.totalTries >= 3 && timeElapsed < RETRY_INTERVAL;
      if (isBlocked) {
        return {
          success: false,
          message: `Maximum limits exceeded. Please try again after ${
            RETRY_INTERVAL / 60000
          } minutes.`,
        };
      }

      oldOtp.otp = otp;
      const tmp = new Date(oldOtp.lastTry);
      oldOtp.lastTry = new Date(now);
      oldOtp.totalTries = oldOtp.totalTries + 1;
      oldOtp.firstName = firstName;
      oldOtp.lastName = lastName || "";
      oldOtp.totalInputTries = 0;

      // On the 4th attempt, reset tracking
      if (oldOtp.totalTries >= 4) {
        oldOtp.firstTry = tmp; // Move firstTry to second attempt's timestamp

        oldOtp.totalTries = now - tmp.getTime() > RETRY_INTERVAL ? 1 : 2; // Reset counter
      }

      await oldOtp.save();

      if (process.env.NODE_ENV === "development") {
        console.log(`Updated OTP for ${validEmail} with OTP ${otp}`);
      } else {
        await sendEmail(validEmail, firstName, lastName || "", otp);
      }

      return { success: true, message: "OTP sent successfully!" };
    }

    // Create a new OTP record
    await SignUpOtp.create({
      firstName,
      lastName,
      email: validEmail,
      otp,
      lastTry: now,
      firstTry: now,
      totalTries: 1,
    });

    if (process.env.NODE_ENV === "development") {
      console.log(`Created new OTP for ${validEmail} with OTP ${otp}`);
    } else {
      await sendEmail(validEmail, firstName, lastName || "", otp);
    }

    return { success: true, message: "OTP sent successfully!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Something went wrong." };
  }
}

async function generateUniqueUserId(digits = 10) {
  let userId;
  let exists = true;
  const min = Math.pow(10, digits - 1); // Smallest number with `digits` length
  const max = Math.pow(10, digits) - 1; // Largest number with `digits` length

  const User = await getUserModel();

  while (exists) {
    userId = Math.floor(min + Math.random() * (max - min));

    // Check if the generated userId already exists
    // Convert `Document | null` to boolean
    exists = !!(await User.exists({ userId }));
  }

  return userId;
}

export async function signUpVerificationVerifyOtp(data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePic?: string;
  referredBy?: string | null;
  otp: string;
}) {
  try {
    if (!data || typeof data !== "object") {
      return { success: false, message: "Invalid input data." };
    }
    // Validate and sanitize input using Zod
    const validatedData = await signupSchema.parseAsync({ ...data });
    const { firstName, lastName, email, password, profilePic, referredBy } = validatedData;

    const SignUpOtp = await getSignUpOtpModel();
    const User = await getUserModel();

    const signUpOtp = await SignUpOtp.findOne({ email: email });
    // console.log("Body: ", body, "Data: ", validatedData, "SignUpOtp: ", signUpOtp)
    // console.log("SignUpOtp: \t", signUpOtp.otp)
    console.log("SignUpOtp of body: ", data.otp);

    if (!signUpOtp) {
      return { success: false, message: "Something Wrong! Please Refresh the page and try again." };
    }

    if (signUpOtp.totalInputTries >= MAX_ATTEMPTS) {
      return {
        success: false,
        message: `Too many failed attempts. Please resend otp and try again.`,
        errorPath: "otp",
      };
    }

    signUpOtp.totalInputTries += 1;

    if (signUpOtp.otp !== data.otp) {
      await signUpOtp.save();
      return { success: false, message: "Invalid OTP", errorPath: "otp" };
    }

    // return NextResponse.json({ message: "OTP Match" }, { status: 200 });

    // Connect to MongoDB

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return { success: false, message: "Email is already in use.", errorPath: "otp" };
    }

    // Hash the password

    const hashedPassword = await hash(password, 10);
    const userId = await generateUniqueUserId(10);
    // Create a new user
    const newUser = new User({
      firstName,
      lastName: lastName || null, // Null if not provided
      email,
      password: hashedPassword,
      profilePic,
      referredBy: referredBy || null, // Null if no referral
      userId,
    });

    await newUser.save();

    // Delete the OTP record
    await signUpOtp.deleteOne();

    return { success: true, message: "User registered successfully!" };
  } catch (error) {
    console.error(error);

    if (error instanceof ZodError) {
      return { success: false, message: error.errors[0].message, errorPath: "otp" };
    }

    // Handle other errors
    return { success: false, message: "Something went wrong." };
  }
}
