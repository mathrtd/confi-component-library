export type BadgeFontSizeProps = 'extra-small' | 'small' | 'medium-small' | 'medium' | 'medium-large' | 'large' | 'extra-large' | '2extra-large'

export interface BadgeProps {
  value?: string,
  fontSize?: BadgeFontSizeProps,
}