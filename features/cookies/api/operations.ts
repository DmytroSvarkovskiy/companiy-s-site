import type { TCookiesVariants } from "./types";

export const setCookies = async (variant: TCookiesVariants) => {
  const res = await fetch("/api/cookies", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ variant }),
  });

  if (!res.ok) throw new Error("Failed to set cookies");
  return res.json() as Promise<{ ok: true }>;
};
