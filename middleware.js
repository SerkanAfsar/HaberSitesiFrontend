import { NextResponse, NextRequest } from "next/server";
import { returnDecodedToken } from "./Utils/helpers";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/Admin/:path*",
};
