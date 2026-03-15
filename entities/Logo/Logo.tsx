import Image from "next/image";
import Link from "next/link";
import { cn } from "@/shared/utils";

type LogoProps = {
  className?: string;
  textClassName?: string;
  imageClassName?: string;
  showText?: boolean; // Додав опцію приховування тексту
};

export const Logo = ({ className, textClassName, imageClassName, showText = true }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-[0.3em] transition-opacity hover:opacity-90",
        className,
      )}
    >
      <div className={cn("relative shrink-0", imageClassName)}>
        <Image
          loading="eager"
          alt="Kit Global Logo"
          src="/Icons/logo.svg"
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>

      {showText && (
        <p
          className={cn(
            "font-orbitron tracking-wider whitespace-nowrap",
            "text-[1.2em]",
            textClassName,
          )}
        >
          IT GLOBAL
        </p>
      )}
    </Link>
  );
};
