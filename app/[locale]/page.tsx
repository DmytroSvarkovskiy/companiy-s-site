import { cookies } from "next/headers";
import { COOKIES_KEYS } from "@/shared/consts";
import {
  AboutUs,
  ApproachBlock,
  Hero,
  HowWeHelp,
  ImplementsIdea,
  OurProducts,
  PartnersTrustBlock,
  Showcases,
  TechnicalStack,
} from "@/widgets";

export default async function Home() {
  const cookiesData = await cookies();
  const cookiesValue = cookiesData?.get(COOKIES_KEYS.cookies)?.value;
  return (
    <>
      <Hero cookiesValue={cookiesValue} />
      <PartnersTrustBlock />
      <ApproachBlock />
      <Showcases />
      <OurProducts />
      <HowWeHelp />
      <TechnicalStack />
      <ImplementsIdea />
      <AboutUs />
    </>
  );
}
