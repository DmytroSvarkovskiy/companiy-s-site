"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { cn } from "../utils";
import type { AppDialogProps } from "./types";

export const CustomDialog = ({
  trigger,
  open,
  onOpenChange,
  defaultOpen,
  title,
  description,
  showClose = true,
  closeOnOutsideClick = true,
  children,
  footer,
  className,
  contentClassName,
}: AppDialogProps) => {
  const controlled = typeof open === "boolean";

  return (
    <Dialog
      open={controlled ? open : undefined}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
    >
      {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : null}

      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
        showCloseButton={showClose}
        onInteractOutside={(e) => {
          if (!closeOnOutsideClick) e.preventDefault();
        }}
        className={cn("p-0 gap-0 overflow-hidden w-[calc(100vw-2rem)]", className)}
      >
        <div
          className={cn(
            "border-0",
            title || description || showClose ? "px-4 py-3" : "p-0 h-0 overflow-hidden",
          )}
        >
          <DialogHeader className="px-0">
            <DialogTitle className={!title ? "sr-only" : undefined}>
              {title ?? "Dialog"}
            </DialogTitle>

            <DialogDescription className={!description ? "sr-only" : undefined}>
              {description ?? "Dialog description"}
            </DialogDescription>
          </DialogHeader>
        </div>

        {children && (
          <div
            tabIndex={-1}
            className={cn("max-h-[85vh] overflow-auto p-4 outline-none", contentClassName)}
          >
            {children}
          </div>
        )}

        {footer && (
          <DialogFooter className="sticky bottom-0 border-t px-4 py-3">{footer}</DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
