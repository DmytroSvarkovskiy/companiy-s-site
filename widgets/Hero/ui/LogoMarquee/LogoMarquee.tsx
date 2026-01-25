import Image from "next/image";

export const LogoMarquee = () => {
  const icons = Array.from({ length: 25 }, (_, i) => `/projects-icons/${i + 1}.svg`);

  return (
    <div className="w-full overflow-hidden border border-y border-secondary mt-46 lg:mt-40">
      <div className="marquee">
        <div className="marquee__track">
          {icons.map((src) => (
            <div
              key={`a-${src}`}
              className="marquee__item h-11.25 w-43.75 overflow-hidden flex items-center justify-center"
            >
              <Image
                src={src}
                alt="logo"
                width={175}
                height={45}
                className="logo-filter object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="marquee__track ">
          {icons.map((src) => (
            <div
              key={`b-${src}`}
              className="marquee__item h-11.25 w-43.75 overflow-hidden flex items-center justify-center"
            >
              <Image
                src={src}
                alt="logo"
                width={175}
                height={45}
                className="logo-filter object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
