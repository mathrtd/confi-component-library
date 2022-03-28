import { FocusEventHandler } from "react";

export interface SingleInputProps {
  value?: string,
  defaultValue?: string,
  error?: boolean,
  errorMessage?: string,
  helpMessage?: string,
  disabeld?: boolean,
  readonly?: boolean,
  numberOfDigits?: number,
  onFocus?: FocusEventHandler<HTMLInputElement>,
  onBlur?: React.FocusEventHandler<HTMLInputElement>,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
}