// models/User.js

import { Schema } from "mongoose";
import connectToUserDb from "../connections/userDb";


const userSchema = new Schema(
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


let User;

export default async function getUserModel() {
  const conn = await connectToUserDb();
  if (!User) {
    User = conn.models.User || conn.model("User", userSchema);
  }
  return User;
}