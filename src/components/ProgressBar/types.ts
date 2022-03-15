export type ProgressBarVariantProps = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';

export interface ProgressBarProps {
  variant?: ProgressBarVariantProps,
  progress?: number,
  height?: number,
  maxWidth?: number
}