import Image from "next/image";
import { FooterContacts, FooterLocation, FooterSocials } from "./ui";

export const Footer = async () => {
  const subtitleClassName = "font-medium text-24 mb-6";

  return (
    <div className="section relative">
      <footer className="border-t dark:border-phone-btn border-muted">
        <div
          className="container py-16 flex flex-col gap-12 lg:flex-row lg:justify-between
      md:pb-14 md:flex-row md:gap-4
      xl:pb-6"
        >
          <FooterSocials />

          <FooterContacts subtitleClassName={subtitleClassName} />

          <FooterLocation subtitleClassName={subtitleClassName} />
        </div>
      </footer>
      <Image
        src={"/images/footer-mobile.png"}
        width={320}
        height={560}
        alt="decor"
        className="xl:hidden absolute -z-10 bottom-12 right-0 md:bottom-2"
      />
      <Image
        src={"/images/footer-desktop.png"}
        width={370}
        height={500}
        alt="decor"
        className="hidden xl:block absolute bottom-0 right-0"
      />
    </div>
  );
};
