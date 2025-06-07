import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import User from '@/models/User';
const ADMIN_TOKEN = process.env.AUTH_SECRET; // Store the admin token as an environment variable or constant

export async function POST(req) {
  try {
    // Get the admin token from the request headers
    const token = req.headers.get("Authorization")?.split(' ')[1]; // Expecting "Bearer <token>"
    if (!token) {
      return NextResponse.json({ success: false, message: "Admin token is required" }, { status: 403 });
    }
    
    if (token !== ADMIN_TOKEN) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 403 });
      // throw new Error('Unauthorized');
    }

    // Get the user details from the request body
    const formDatas =  await req.json();
    const email = formDatas.email;

    // Ensure required fields are present
    if (!email) {
      return NextResponse.json({ success: false, message: "Missing required user fields" }, { status: 400 });
    }

    await connectToDatabase()
    const user = await User.findOne({ email });

    // Respond with the created user
    return NextResponse.json({ success: true, message: "User fetched successfully", user: user || false }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
