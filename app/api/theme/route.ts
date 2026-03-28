import { NextResponse } from "next/server";
import { COOKIES_KEYS } from "@/shared/consts";

export async function POST(req: Request) {
  const { theme } = await req.json().catch(() => ({}));

  if (theme !== "dark" && theme !== "light") {
    return NextResponse.json({ ok: false, message: "Wrong theme" }, { status: 400 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIES_KEYS.theme, theme, {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });

  return res;
}
