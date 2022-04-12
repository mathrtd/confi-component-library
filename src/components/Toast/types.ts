export type ToastPositionProps = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

export type ElementTypeProps = "error" | "success" | "warning";

export interface ToastProps {
  message?: string;
  elementType?: ElementTypeProps;
  position?: ToastPositionProps;
  isActive?: boolean;
  timeout?: number;
}