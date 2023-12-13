import { getCookie } from "cookies-next";

export const cookieTokenKey = getCookie(process.env.NEXT_PUBLIC_COOKIE_NAME);
