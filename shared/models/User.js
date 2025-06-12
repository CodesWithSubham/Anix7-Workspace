// models/User.js

import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: { type: Number, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, default: null },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, default: null },

    profilePic: { type: String, default: null },

    loggedBy: {
      type: [String],
      default: ["credentials"],
      enum: ["credentials", "google", "github"],
    },

    // UPDATED FIELD
    balance: {
      type: Map,
      of: Number,
      default: {
        diamond: 0,
        coin: 0,
        life: 0,
      },
    },

    referredBy: { type: Number, default: null }, // Refers to another user's userId
  },
  { timestamps: true }
);

const User = mongoose.models?.User || model("User", userSchema);
export default User;
