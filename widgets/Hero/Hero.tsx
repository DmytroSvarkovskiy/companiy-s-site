import { Decor, LogoMarquee } from "./ui";
import { Text } from "./ui/index.client";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden h-screen">
      <Decor />
      <Text />
      <LogoMarquee />
    </section>
  );
};
