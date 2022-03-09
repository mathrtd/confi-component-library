import { FocusEventHandler, InputHTMLAttributes } from "react";

export type InputType = "text" | "search" | "encrypted" | "password";
export type InputSizeProps = "small" | "large";

export interface InputFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  value?: string,
  defaultValue?: string,
  error?: boolean,
  errorMessage?: string,
  helpMessage?: string,
  block?: boolean,
  mask?: (string | RegExp)[] | ((value: string) => (string | RegExp)[]),
  activeState?: boolean,
  loading?: boolean,
  inputType?: InputType,
  onFocus?: FocusEventHandler<HTMLInputElement>,
  onBlur?: React.FocusEventHandler<HTMLInputElement>,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  onStateToggle?: (newValue: boolean) => void,
}