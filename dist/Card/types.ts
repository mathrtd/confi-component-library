import { ReactNode } from "react";

export interface CardProps {
  title?: string;
  child?: ReactNode;
  actions?: ReactNode[];
}