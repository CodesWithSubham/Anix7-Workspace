import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/db";
import User from "../../../models/User";
import { signupSchema } from "../../../lib/zod";
import { hash } from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate and sanitize input using Zod
    const validatedData = signupSchema.parseAsync(body);
    const { name, email, password, isVerified, profilePic, balance, referredBy } = validatedData;

    // Connect to MongoDB
    await connectToDatabase();

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({ error: "Email is already in use." }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      isVerified,
      profilePic,
      balance,
      referredBy: referredBy || null, // Null if no referral is provided
    });

    await newUser.save();

    return NextResponse.json({ message: "User registered successfully!" }, { status: 201 });
  } catch (error) {
    if (error.name === "ZodError") {
      // Return Zod validation errors
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
    }
    console.error(error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
