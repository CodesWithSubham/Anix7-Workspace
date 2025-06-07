// app/api/login/route.js
import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';

// Handle POST request for login
export async function POST(req) {
  try {
    const { password } = await req.json(); // Get the password from the request body

    // Check if the password matches the admin password in the environment
    const adminPassword = process.env.ADMIN_PASSWORD;
    console.log(password, adminPassword);
    if (password !== adminPassword) {
      return NextResponse.json({ message: 'Incorrect password' }, { status: 401 });
    }

    
    // Create the JWT using jose
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ role: 'admin' })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("3h")
      .sign(secret);

    // Set HTTP-only cookie
    const response = NextResponse.json({ message: "Verified successfully" });
    response.cookies.set("adminToken", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", maxAge: 60 * 60 * 3 });

    return response;

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
