import authjsConfig from "@shared/config/authjs.config";
import NextAuth from "next-auth";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  // adapter: MongoDBAdapter(clientPromise),
  ...authjsConfig,
});
