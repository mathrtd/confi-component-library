import styled from "styled-components";
import {
  colors,
  spacings,
  borders,
  fontSizes,
  fontWeights,
} from '../shared/theme';
import { BadgeFontSizeProps, BadgeProps } from "./types";

const fontProps: Record<BadgeFontSizeProps, {[key: string]: any}> = {
  'extra-small': {
    'size': fontSizes.xs,
    'weight': fontWeights.w700
  },
  'small': {
    'size': fontSizes.sl,
    'weight': fontWeights.w500
  },
  'medium-small': {
    'size': fontSizes.sm,
    'weight': fontWeights.w500
  },
  'medium': {
    'size': fontSizes.md,
    'weight': fontWeights.w700
  },
  'medium-large': {
    'size': fontSizes.ml,
    'weight': fontWeights.w700
  },
  'large': {
    'size': fontSizes.ls,
    'weight': fontWeights.w700
  },
  'extra-large': {
    'size': fontSizes.lg,
    'weight': fontWeights.w700
  },
  '2extra-large': {
    'size': fontSizes.xl,
    'weight': fontWeights.w700
  },
}

export const BadgeContainer = styled.span<BadgeProps>`
  font-family: 'DM Sans', sans-serif;
  display: inline-block;
  padding: ${spacings.sl};
  font-weight: ${props => fontProps[props.fontSize ?? 'medium-small']['weight']};
  font-size: ${props => fontProps[props.fontSize ?? 'medium-small']['size']};
  color: ${colors.darkestGray};
  background: ${colors.lightGray};
  border-radius: ${borders.md};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 300px;

  &:last-child{
    margin-right: ${spacings.lg};
  }
`