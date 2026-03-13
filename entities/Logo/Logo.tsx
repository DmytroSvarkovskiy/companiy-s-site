import Image from "next/image";
import Link from "next/link";
import { cn } from "@/shared/utils";

type LogoProps = {
  className?: string;
  textClassName?: string;
  imageClassName?: string;
};

export const Logo = ({ className, textClassName, imageClassName }: LogoProps) => {
  return (
    <Link href="/" className={cn("flex items-center gap-1 text-header-fg", className)}>
      <Image
        loading="eager"
        alt="logo"
        src="/Icons/logo.svg"
        width={60}
        height={70}
        className={cn("w-8 h-7 md:w-9 md:h-11 2xl:w-9.5 2xl:h-11.5", imageClassName)}
      />
      <p className={cn("font-orbitron text-18 tracking-wider hidden lg:block", textClassName)}>
        IT GLOBAL
      </p>
    </Link>
  );
};
