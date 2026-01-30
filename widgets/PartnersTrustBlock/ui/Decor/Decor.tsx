import Image from "next/image";

export const Decor = () => {
  return (
    <>
      <Image
        aria-hidden
        width={456}
        height={220}
        src={"/images/partners_left.png"}
        alt="decor-left"
        className="pointer-events-none absolute left-0 top-60 md:top-30 lg:top-40 2xl:top-120"
      />
      <Image
        aria-hidden
        width={457}
        height={457}
        src={"/images/partners_middle.png"}
        alt="decor-middle"
        className="pointer-events-none absolute hidden xl:block xl:top-70 2xl:top-125 xl:left-[40%]"
      />
      <Image
        aria-hidden
        width={180}
        height={180}
        src={"/images/partners_right.png"}
        alt="decor-middle"
        className="pointer-events-none absolute top-180 md:top-70 right-0 lg:top-85 xl:top-95 "
      />
    </>
  );
};
