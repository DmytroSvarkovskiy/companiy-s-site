import Image from "next/image";

export const Decor = () => {
  return (
    <>
      {" "}
      <Image
        src={"/images/hero_top-left.png"}
        alt=""
        aria-hidden
        width={261}
        height={127}
        className="
          pointer-events-none
          absolute
          left-0
          -top-3
          w-20
          xl:top-20
          xl:w-30
        "
      />
      <Image
        src={"/images/mobile-hero-right.png"}
        alt=""
        aria-hidden
        width={232}
        height={532}
        className="
          pointer-events-none
          absolute
          right-0
          top-20
          w-50
          z-0
          xl:hidden
        "
      />
      <Image
        src={"/images/desktop-hero-right.png"}
        alt=""
        aria-hidden
        width={373}
        height={567}
        className="
          pointer-events-none
          absolute
          right-0
          top-20
          hidden
          xl:block
          w-80
          z-0
        "
      />
    </>
  );
};
