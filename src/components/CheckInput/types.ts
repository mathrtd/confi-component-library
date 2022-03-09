import { InputHTMLAttributes } from "react";

type FormCheckInputType = 'checkbox' | 'radio';

export type CheckedStyleProps = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

export interface LabelProps {
  error?: boolean,
  readOnly?: boolean,
  checkedStyle?: CheckedStyleProps,
}

export interface CheckInputProps {
  name?: string,
  label?: string,
  checked?: boolean,
  value?: string,
  error?: boolean,
  errorMessage?: string,
  readOnly?: boolean,
  type?: FormCheckInputType,
  checkedStyle?: CheckedStyleProps,
  onChange?: (newChecked: boolean, name?: string) => void,
}