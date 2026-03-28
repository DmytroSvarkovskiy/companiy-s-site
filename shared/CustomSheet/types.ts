export type Side = "right" | "left" | "top" | "bottom";

export type AppSheetProps = {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;

  side?: Side;

  title?: React.ReactNode;
  description?: React.ReactNode;

  showClose?: boolean;

  children?: React.ReactNode;

  footer?: React.ReactNode;

  className?: string;
  contentClassName?: string;
};
