import { NextResponse } from "next/server";
import { verifyMail } from "@shared/components/ui/mail";
import { sendNoReplyMail } from "@shared/lib/sendMail";
import getUserModel from "@shared/lib/db/models/User";
import getSignUpOtpModel from "@shared/lib/db/models/SignUpOtp";

const retryInterval = 10 * 60 * 1000; // 30 minutes

async function sendEmail(email, firstName, lastName, otp) {
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

export async function POST(req) {
  try {
    const { firstName, lastName, email } = await req.json();
    if (!firstName || !email) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    // Connect to MongoDB
    const User = await getUserModel();
    const SignUpOtp = await getSignUpOtpModel();

    const now = Date.now();

    const validEmail = email.toLowerCase().replace(/\+.*(?=@)/, "");

    // Check if the user already exists
    const userExists = await User.findOne({ email: validEmail });
    if (userExists) {
      return NextResponse.json(
        { error: "Email is already in use.", errorPath: "email" },
        { status: 400 }
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // Find existing OTP record
    const oldOtp = await SignUpOtp.findOne({ email: validEmail });

    if (oldOtp) {
      const timeElapsed = now - oldOtp.firstTry;
      const isBlocked = oldOtp.totalTries >= 3 && timeElapsed < retryInterval;
      if (isBlocked) {
        return NextResponse.json(
          {
            error: `Maximum limits exceeded. Please try again after ${
              retryInterval / 60000
            } minutes.`,
          },
          { status: 400 }
        );
      }

      oldOtp.otp = otp;
      const tmp = new Date(oldOtp.lastTry);
      oldOtp.lastTry = now;
      oldOtp.totalTries = oldOtp.totalTries + 1;
      oldOtp.firstName = firstName;
      oldOtp.lastName = lastName;
      oldOtp.totalInputTries = 0;

      // On the 4th attempt, reset tracking
      if (oldOtp.totalTries >= 4) {
        oldOtp.firstTry = tmp; // Move firstTry to second attempt's timestamp

        oldOtp.totalTries = now - tmp > retryInterval ? 1 : 2; // Reset counter
      }

      await oldOtp.save();

      if (process.env.NODE_ENV === "development") {
        console.log(`Updated OTP for ${validEmail} with OTP ${otp}`);
      } else {
        await sendEmail(validEmail, firstName, lastName, otp);
      }

      return NextResponse.json({ message: "OTP sent successfully!" }, { status: 200 });
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
      await sendEmail(validEmail, firstName, lastName, otp);
    }

    return NextResponse.json({ message: "OTP sent successfully!" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
