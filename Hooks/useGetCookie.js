"use server";
import { cookies } from "next/headers";

export default async function GetCookieByName({
  cookieName = process.env.NEXT_PUBLIC_COOKIE_NAME,
}) {
  const cookieStore = cookies();
  return await cookieStore.get(cookieName)?.value;
}
