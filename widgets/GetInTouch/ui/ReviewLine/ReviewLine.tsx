import Image from "next/image";

export const ReviewLine = () => {
  const icons = [
    "/reviews/clutch.png",
    "/reviews/fiverr.png",
    "/reviews/freelancehunt.png",
    "/reviews/goodfirm.png",
    "/reviews/linkedin.png",
    "/reviews/upwork.png",
  ];

  const items = [...icons, ...icons];

  return (
    <div
      className="w-full overflow-hidden border-y border-secondary/20 py-8 bg-black/10 dark:bg-transparent
    mt-10 lg:mt-12 2xl:mt-16"
    >
      <div className="marquee">
        <div className="marquee__track marquee__track--fast">
          {items.map((src, idx) => (
            <div key={`${idx}-${src}`} className="marquee__item px-10 shrink-0">
              <Image
                src={src}
                alt="review platform"
                width={160}
                height={60}
                className="logo-filter object-contain h-10 w-auto transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
