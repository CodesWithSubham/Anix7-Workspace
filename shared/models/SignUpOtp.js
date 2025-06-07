// models/SignUpOtp.js
import  mongoose, { model } from  "mongoose";

const signUpOtpSchema = new mongoose.Schema(
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

const SignUpOtp = mongoose.models?.SignUpOtp || model("SignUpOtp", signUpOtpSchema);
export default SignUpOtp;
