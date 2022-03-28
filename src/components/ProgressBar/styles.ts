import styled from "styled-components";
import { borders, colors } from "../shared/theme";
import { ProgressBarProps, ProgressBarVariantProps } from "./types";

const colorsProps: Record<ProgressBarVariantProps, string> = {
  primary: colors.primary,
  secondary: colors.darkGray,
  success: colors.success,
  warning: colors.warning,
  danger: colors.danger,
  info: colors.info,
  dark: colors.darkestGray,
  light: colors.lightGray,
}

export const DefaultProgressBar = styled.div<ProgressBarProps>`
  position: relative;
  width: 100%;
  max-width: ${(props) => props.maxWidth}px;
  height: ${(props) => props.height ?? '4'}px;
  background: ${colors.gray};
  border-radius: 2px;

  &::after{
    content: "";
    position: absolute;
    top: 0px;
    width: ${(props) => props.progress}%;
    height: ${(props) => props.height ?? '4'}px;
    background: ${(props) => colorsProps[props.variant ?? 'success']};
    border-radius: 2px;
    transition: all 0.3s linear;
  }
`;