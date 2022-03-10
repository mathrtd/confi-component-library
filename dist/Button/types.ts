import { ButtonHTMLAttributes } from 'react';

type ButtonSizeProps = 'small' | 'medium' | 'large';
type ButtonIconSideProps = 'left' | 'right';
type ButtonThemeProps = 'backoffice';

// se voce for ver no design system, os botoes secundarios sao apenas o primario com um outline
// por causa disso, se o tipo do botao for 'secondary', ele ficara com o estilo de como se fosse o tertiary no design system
// se voce quiser usar o botao secondary do design system, use o 'primary' com outline true
// https://www.figma.com/file/s4Ui1WdPSweznrprrIjrbC/Design-System---Confi?node-id=20%3A214
export type ButtonVariantProps = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'link';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string,
  backgroundColor?: string,
  width?: string,
  loading?: boolean,
  disabled?: boolean,
  block?: boolean,
  outline?: boolean,
  spaceBetween?: boolean,
  icon?: JSX.Element,
  iconHover?: JSX.Element,
  size?: ButtonSizeProps,
  variant: ButtonVariantProps,
  iconSide?: ButtonIconSideProps,
  theme?: ButtonThemeProps,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}