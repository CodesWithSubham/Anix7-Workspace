// models/User.js

import  mongoose, { model } from  "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Ensure ObjectId
    userId: { type: Number, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, default: null },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, default: null },
    isVerified: { type: Boolean, default: false },
    profilePic: { type: String, default: null },
    balance: { type: Number, default: 0 },
    referredBy: { type: Number, default: null }, // Refers to another user's userId
  },
  { timestamps: true }
);

const User = mongoose.models?.User || model("User", userSchema);
export default User;
