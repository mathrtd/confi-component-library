type IconSideProps = 'left' | 'right'

export interface IconContainerProps {
  iconSide?: IconSideProps
}

export interface ButtonLinkProps {
  label?: string,
  icon?: boolean,
  iconSide?: IconSideProps,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}