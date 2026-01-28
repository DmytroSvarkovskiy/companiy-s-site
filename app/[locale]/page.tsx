import { cookies } from "next/headers";
import { COOKIES_KEYS } from "@/shared/consts";
import { Hero } from "@/widgets";

export default async function Home() {
  const cookiesData = await cookies();
  const cookiesValue = cookiesData?.get(COOKIES_KEYS.cookies)?.value;
  return (
    <>
      <Hero cookiesValue={cookiesValue} />
    </>
  );
}
