import { CookiesBlock } from "../CookiesBlock/CookiesBlock";
import { Decor, LogoMarquee } from "./ui";
import { Text } from "./ui/index.client";

type TProps = { cookiesValue?: string };

export const Hero = ({ cookiesValue }: TProps) => {
  return (
    <section className="relative overflow-hidden h-screen">
      <Decor />
      <Text />
      <LogoMarquee />
      <div className="container relative"> {!cookiesValue && <CookiesBlock />}</div>
    </section>
  );
};
