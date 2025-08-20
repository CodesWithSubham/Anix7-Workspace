// Do not use any script that is not compatible with Edge Runtime in this file

import NextAuth, { NextAuthConfig, NextAuthResult } from "next-auth";

import credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import { compare } from "bcryptjs";
import { signInSchema } from "@shared/lib/zod";
import { cookies } from "next/headers";

// ✅ Modular ENV usage
const adminToken = process.env.AUTH_SECRET;
const OWNER_EMAIL = process.env.OWNER_EMAIL; // ✅ Added for getRole
const AUTH_BASE_URL = process.env.AUTH_BASE_URL;

const adminList = [
  "subhamduary11@gmail.com",
  "no-reply.tools@anix7.in",
  "contact.tools@anix7.in",
  "contactme5950@gmail.com",
];

// ✅ Added getRole util
function getRole(email: string) {
  return email === OWNER_EMAIL ? "owner" : adminList.includes(email) ? "admin" : "user"; // Check if the email matches the owner email or is in the admin list
}
async function getUserFromDb(email: string) {
  try {
    const response = await fetch(`${AUTH_BASE_URL}/api/auth/getUserByEmail`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${adminToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }), // Send the user details in the request body
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData.message);
      throw new Error("Failed to fetch user"); // ✅ Generic error
    }

    const data = await response.json();
    return data.user || null;
  } catch (error) {
    console.error("Network error in getUserFromDb:", error);
    throw new Error("Server error");
  }
}

async function createUser(userDetails: {
  firstName: string;
  lastName: string | null;
  email: string;
  profilePic: string | null | undefined;
  isVerified: boolean;
  referredBy?: string | null; // Optional, can be null if not referred
}) {
  try {
    const response = await fetch(`${AUTH_BASE_URL}/api/auth/createUser`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${adminToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userDetails }), // Send the user details in the request body
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData.message);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Network error in createUser:", error);
    return false;
  }
}

function getCookieDomain() {
  try {
    if (!process.env.AUTH_BASE_URL) {
      throw new Error("❌ AUTH_BASE_URL is not defined");
    }

    const url = new URL(process.env.AUTH_BASE_URL);
    const hostname = url.hostname;

    if (hostname === "localhost") return undefined; // For local dev

    const parts = hostname.split(".");
    if (parts.length >= 2) {
      const baseDomain = parts.slice(-2).join(".");
      return `.${baseDomain}`; // -> '.anix7.in'
    }

    return undefined;
  } catch (error) {
    console.error("Invalid AUTH_BASE_URL in env:", error);
    return undefined;
  }
}

const config: NextAuthConfig = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const { email, password } = await signInSchema.parseAsync(credentials);

          const userData = await getUserFromDb(email);
          if (!userData) {
            // throw new CustomError("No user found with this email")
            return null;
          }

          const isPasswordValid = await compare(password, userData.password);
          if (!isPasswordValid) {
            return null;
            // throw new CustomError()
            // throw new Error("Invalid email or password");
          }

          const { userId, firstName, lastName, isVerified, profilePic, balance, referredBy } =
            userData;

          // Return user data for the session
          const user = {
            userId,
            email,
            firstName,
            lastName,
            isVerified,
            profilePic,
            balance,
            referredBy,
          };
          return user;
        } catch (error) {
          // if (error instanceof ZodError) {
          // Return `null` to indicate that the credentials are invalid
          return null;
          // }
        }
      },
    }),
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        if (account?.provider === "google") {
          if (!user?.email) {
            return false; // Reject sign-in
          }

          const existingUser = await getUserFromDb(user.email);

          if (!existingUser) {
            // ✅ Safe cookie usage
            const cookieStore = await cookies();
            const referredBy = cookieStore.get("referral_id")?.value || null;

            return await createUser({
              firstName: user.name || "User",
              lastName: null,
              email: user.email,
              isVerified: profile?.email_verified || false,
              profilePic: user.image,
              referredBy, // Store referredBy if available
            });
          }
        }

        return true; // Allow sign-in
      } catch (error) {
        console.error("Unexpected error in signIn callback:", error);
        return false; // Reject sign-in
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          ...user,
          role: user.email ? getRole(user.email) : "user",
        };
      }
      return token;
    },
    session({ session, token }) {
      if (token.user) session.user = token.user as any; // Cast to any to avoid type issues
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: `${process.env.NODE_ENV === "production" ? "__Secure-" : ""}authjs.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
        domain: getCookieDomain(), // 👈 Dynamic domain
      },
    },
  },
};

const authSetup = NextAuth(config) as NextAuthResult;

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = authSetup;

// 👇 Customize this according to your `AuthUser` shape
declare module "next-auth" {
  interface User {
    userId: number;
    firstName: string;
    lastName?: string;
    isVerified: boolean;
    profilePic?: string | null;
    balance?: {
      diamond: number;
      coin: number;
      life: number;
    };
    referredBy?: string | null; // Optional, can be null if not referred
    loggedBy?: "credentials" | "google" | "github"; // Auth provider
    role?: "user" | "owner" | "admin";
  }
}
