import { ChangeEventHandler, SelectHTMLAttributes } from "react";

export type SelectSizeProps = "small" | "large";

interface OptionProps {
  value: string,
  label: string,
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string,
  label: string,
  options: OptionProps[],
  readOnly?: boolean,
  selectSize?: SelectSizeProps,
  block?: boolean,
  value?: string,
  error?: boolean,
  errorMessage?: string,
  search?: boolean,
  searching?: boolean,
  onChange?: ChangeEventHandler<HTMLSelectElement>,
  onSearchInputChange?: React.ChangeEventHandler<HTMLInputElement>,
}