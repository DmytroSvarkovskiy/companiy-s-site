import { NextResponse } from "next/server";
import { COOKIES_KEYS } from "@/shared/consts";

export async function POST(req: Request) {
  const { variant } = await req.json().catch(() => ({}));

  if (variant !== "accept" && variant !== "decline") {
    return NextResponse.json({ ok: false, message: "Wrong answer" }, { status: 400 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIES_KEYS.cookies, variant, {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });

  return res;
}
