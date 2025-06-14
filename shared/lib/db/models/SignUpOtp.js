// models/SignUpOtp.js
import { Schema } from "mongoose";
import connectToUserDb from "../connections/userDb";

const signUpOtpSchema = Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, default: null },
    email: { type: String, required: true, unique: true, lowercase: true },
    lastTry: { type: Date, default: null }, // Default to current if not provided
    otp: { type: String, required: true },
    firstTry: { type: Date, default: null }, // Default to current if not provided
    totalTries: { type: Number, default: 0 }, // Default to 0 if not provided
    totalInputTries: { type: Number, default: 0 }, // Default to 0 if not provided
  },
  { timestamps: true }
);

let SignUpOtp;

export default async function getSignUpOtpModel() {
  const conn = await connectToUserDb();
  if (!SignUpOtp) {
    SignUpOtp =
      conn.models.SignUpOtp || conn.model("SignUpOtp", signUpOtpSchema);
  }
  return SignUpOtp;
}
