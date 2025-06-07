
import User from "@shared/models/User";
import connectToDatabase from "./db";

export async function generateUniqueUserId(digits = 10) {
  let userId;
  let exists = true;
  const min = Math.pow(10, digits - 1); // Smallest number with `digits` length
  const max = Math.pow(10, digits) - 1; // Largest number with `digits` length

  await connectToDatabase();

  while (exists) {
    userId = Math.floor(min + Math.random() * (max - min));

    // Check if the generated userId already exists
    exists = await User.exists({ userId });
  }

  return userId;
}
