// middleware.js

import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import authjsConfig from "@shared/config/authjs.config";



const { auth } = NextAuth(authjsConfig);
// import { auth } from "./auth";

export default auth(async (req) => {
  // console.log(req.auth)

  if (!req.auth && req.nextUrl.pathname !== "/") {
    const nextPath = req.nextUrl.pathname + req.nextUrl.search; // Preserve the original path and query
    const redirectUrl = new URL("/", req.nextUrl.origin);

    // Append the original path as `next` query parameter
    redirectUrl.searchParams.set("next", nextPath);
    redirectUrl.searchParams.set("openLogin", "1");

    return NextResponse.redirect(redirectUrl);
  }
});

export const config = {
  matcher: [
    "/(billing|invite|setting|admin|profile|image-uploading/my-uploads)(.*)",
  ],
};

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|i(?=/|$)|assets|page(?=/|$)|blog(?=/|$)|favicon\\.ico|.*\\.[^/]+$).*)",
//   ],
// };
