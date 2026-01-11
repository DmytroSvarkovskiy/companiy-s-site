export type AppDialogProps = {
  trigger?: React.ReactNode;

  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;

  title?: React.ReactNode;
  description?: React.ReactNode;
  showClose?: boolean;

  closeOnOutsideClick?: boolean;

  children?: React.ReactNode;

  footer?: React.ReactNode;

  className?: string;
  contentClassName?: string;
};
