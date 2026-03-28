import { CookiesBlock } from "../CookiesBlock/CookiesBlock";
import { Decor, LogoMarquee } from "./ui";
import { Text } from "./ui/index.client";

type TProps = { cookiesValue?: string };

export const Hero = ({ cookiesValue }: TProps) => {
  return (
    <section className="relative overflow-hidden h-fit">
      <Decor />
      <Text />
      <LogoMarquee />
      {!cookiesValue && <CookiesBlock />}
    </section>
  );
};
