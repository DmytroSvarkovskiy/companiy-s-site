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
        onInteractOutside={(e) => {
          if (!closeOnOutsideClick) e.preventDefault();
        }}
        className={cn("p-0 gap-0 overflow-hidden w-[calc(100vw-2rem)]", className)}
      >
        {(title || description || showClose) && (
          <div className="flex items-start justify-between border-0 px-4 py-3">
            <DialogHeader className="px-0">
              {title ? <DialogTitle>{title}</DialogTitle> : null}
              {description ? (
                <DialogDescription>{description}</DialogDescription>
              ) : (
                <DialogDescription className="sr-only">description</DialogDescription>
              )}
            </DialogHeader>
          </div>
        )}
        {children && children && (
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
