"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { cn } from "../utils";
import type { AppSheetProps } from "./types";

export const CustomSheet = ({
  trigger,
  open,
  onOpenChange,
  defaultOpen,
  side = "right",
  title,
  description,
  showClose = true,
  children,
  footer,
  className,
  contentClassName,
}: AppSheetProps) => {
  const controlled = typeof open === "boolean";

  const Content = (
    <SheetContent
      onOpenAutoFocus={(e) => e.preventDefault()}
      onCloseAutoFocus={(e) => e.preventDefault()}
      side={side}
      className={cn(
        "flex p-0",
        side === "left" || side === "right" ? "w-[90vw] max-w-screen" : "h-[90vh] max-h-screen",
        className,
      )}
      showClose={showClose}
    >
      <SheetHeader className={cn("px-0", !(title || description) && "sr-only")}>
        <SheetTitle>{title ?? "Dialog"}</SheetTitle>
        <SheetDescription>{description ?? "Dialog description"}</SheetDescription>
      </SheetHeader>
      <div className={cn("flex-1 overflow-auto p-4", contentClassName)}>{children}</div>

      {footer && (
        <SheetFooter className="sticky bottom-0 border-t bg-transparent">{footer}</SheetFooter>
      )}
    </SheetContent>
  );

  return (
    <Sheet
      open={controlled ? open : undefined}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
    >
      {trigger ? <SheetTrigger asChild>{trigger}</SheetTrigger> : null}
      {Content}
    </Sheet>
  );
};
