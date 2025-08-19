import { NextResponse } from "next/server";
import { signupSchema } from "@shared/lib/zod";
import { hash } from "bcryptjs";
import getSignUpOtpModel from "@shared/lib/db/models/SignUpOtp";
import getUserModel from "@shared/lib/db/models/User";

const MAX_ATTEMPTS = 5;
// const BLOCK_DURATION = 10 * 60 * 1000; // 10 minutes

// async function checkRateLimit(signUpOtpData) {
//   return true; // Allow request
// }

async function generateUniqueUserId(digits = 10) {
  let userId;
  let exists = true;
  const min = Math.pow(10, digits - 1); // Smallest number with `digits` length
  const max = Math.pow(10, digits) - 1; // Largest number with `digits` length

  const User = await getUserModel();

  while (exists) {
    userId = Math.floor(min + Math.random() * (max - min));

    // Check if the generated userId already exists
    exists = await User.exists({ userId });
  }

  return userId;
}

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate and sanitize input using Zod
    const validatedData = await signupSchema.parseAsync(body);
    const { firstName, lastName, email, password, profilePic, referredBy } = validatedData;

    const SignUpOtp = await getSignUpOtpModel();
    const User = await getUserModel();

    const signUpOtp = await SignUpOtp.findOne({ email: email });
    // console.log("Body: ", body, "Data: ", validatedData, "SignUpOtp: ", signUpOtp)
    // console.log("SignUpOtp: \t", signUpOtp.otp)
    console.log("SignUpOtp of body: ", body.otp);

    if (!signUpOtp) {
      return NextResponse.json(
        { error: "Something Wrong! Please Refresh the page and try again." },
        { status: 400 }
      );
    }

    if (signUpOtp.totalInputTries >= MAX_ATTEMPTS) {
      return NextResponse.json(
        {
          error: `Too many failed attempts. Please resend otp and try again.`,
          errorPath: "otp",
        },
        { status: 429 }
      );
    }

    signUpOtp.totalInputTries += 1;

    if (signUpOtp.otp !== body.otp) {
      await signUpOtp.save();
      return NextResponse.json({ error: "Invalid OTP", errorPath: "otp" }, { status: 400 });
    }

    // return NextResponse.json({ message: "OTP Match" }, { status: 200 });

    // Connect to MongoDB

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { error: "Email is already in use.", errorPath: "otp" },
        { status: 400 }
      );
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

    return NextResponse.json({ message: "User registered successfully!" }, { status: 201 });
  } catch (error) {
    console.error(error);
    if (error.name === "ZodError") {
      // Return Zod validation errors
      return NextResponse.json(
        { error: error.errors[0].message, errorPath: "otp" },
        { status: 400 }
      );
    }
    // Handle other errors
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
