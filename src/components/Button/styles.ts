import styled, { keyframes } from "styled-components";
import {
  colors,
  spacings,
  borders,
  fontWeights,
  fontSizes
} from '../shared/theme';
import { ButtonProps, ButtonVariantProps } from "./types";

const colorsProps: Record<ButtonVariantProps, {[key: string]: any}> = {
  primary: {
    color_bg_disable: `${colors.darkGray}`,
    color_bg_initial: `${colors.primary}`,
    color_bg_hover: `${colors.primaryHover}`,
    color_bg_click: `${colors.primaryClick}`,
    color_bg_focus: `${colors.primary}`,

    color_font_disable: `${colors.white}`,
    color_font_initial: `${colors.white}`,
    color_font_hover: `${colors.white}`,

    color_border_disable: `${colors.darkGray}`,
    color_border_initial: `${colors.primary}`,
    color_border_hover: `${colors.primaryHover}`,
    color_border_click: `${colors.primaryClick}`,
    color_border_focus: `${colors.purple}`,
  },
  secondary: {
    color_bg_disable: `${colors.transparent}`,
    color_bg_initial: `${colors.transparent}`,
    color_bg_hover: `${colors.gray}`,
    color_bg_click: `${colors.darkGray}`,
    color_bg_focus: `${colors.transparent}`,

    color_font_disable: `${colors.darkerGray}`,
    color_font_initial: `${colors.darkestGray}`,
    color_font_hover: `${colors.darkestGray}`,

    color_border_disable: `${colors.transparent}`,
    color_border_initial: `${colors.transparent}`,
    color_border_hover: `${colors.gray}`,
    color_border_click: `${colors.darkGray}`,
    color_border_focus: `${colors.purple}`,
  },
  success: {
    color_bg_disable: `${colors.darkGray}`,
    color_bg_initial: `${colors.success}`,
    color_bg_hover: `${colors.successHover}`,
    color_bg_click: `${colors.successClick}`,
    color_bg_focus: `${colors.success}`,

    color_font_disable: `${colors.white}`,
    color_font_initial: `${colors.white}`,
    color_font_hover: `${colors.white}`,

    color_border_disable: `${colors.darkGray}`,
    color_border_initial: `${colors.success}`,
    color_border_hover: `${colors.successHover}`,
    color_border_click: `${colors.successClick}`,
    color_border_focus: `${colors.mint}`,
  },
  warning: {
    color_bg_disable: `${colors.darkGray}`,
    color_bg_initial: `${colors.warning}`,
    color_bg_hover: `${colors.warningHover}`,
    color_bg_click: `${colors.warningClick}`,
    color_bg_focus: `${colors.warning}`,

    color_font_disable: `${colors.white}`,
    color_font_initial: `${colors.white}`,
    color_font_hover: `${colors.white}`,

    color_border_disable: `${colors.darkGray}`,
    color_border_initial: `${colors.warning}`,
    color_border_hover: `${colors.warningHover}`,
    color_border_click: `${colors.warningClick}`,
    color_border_focus: `${colors.beige}`,
  },
  danger: {
    color_bg_disable: `${colors.darkGray}`,
    color_bg_initial: `${colors.danger}`,
    color_bg_hover: `${colors.dangerHover}`,
    color_bg_click: `${colors.dangerClick}`,
    color_bg_focus: `${colors.danger}`,

    color_font_disable: `${colors.white}`,
    color_font_initial: `${colors.white}`,
    color_font_hover: `${colors.white}`,

    color_border_disable: `${colors.darkGray}`,
    color_border_initial: `${colors.danger}`,
    color_border_hover: `${colors.dangerHover}`,
    color_border_click: `${colors.dangerClick}`,
    color_border_focus: `${colors.pink}`,
  },
  info: {},
  dark: {},
  light: {},
  link: {}
}

const loading = keyframes`
  0%{
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, 5px);
  }
  50% {
    transform: translate(0, -5px);
  }
  100% {
    transform: translate(0, 0px);
  }
`;

export const DefaultButton = styled.button<ButtonProps>`
  display: flex;
  justify-content:  ${props => props.spaceBetween ? "space-between;" : "center;"};
  align-items: center;
  min-width: ${props => !!props.icon ? "auto;" : "64px;"};
  width: ${props => props.block ? "100%" : props.width ? `${props.width}` : "auto"};
  min-height: 40px;
  padding: 0px ${spacings.sl};
  background: ${props => props.outline ? colors.transparent : colorsProps[props.variant].color_bg_initial};
  border-radius: ${borders.md};
  border: ${borders.xs} solid ${(props) => colorsProps[props.variant].color_border_initial};
  outline: transparent;
  font-weight: ${fontWeights.w700};
  font-size: ${fontSizes.sm};
  transition: all 0.2s linear;
  color: ${(props) => props.outline ? colors.darkestGray : colorsProps[props.variant].color_font_initial};
  cursor: pointer;

  span{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    border-radius: ${borders.md};
    pointer-events: none;
  }

  /* State medium */
  &.medium{
    min-height: 45px;
    padding: 0 ${spacings.sm};
  }
  /* State large */
  &.large{
    min-height: 53px;
    padding: 0 ${spacings.md};
  }

  /* State normal */
  &:hover{
    background: ${(props) => colorsProps[props.variant].color_bg_hover};
    border: ${borders.xs} solid ${(props) => colorsProps[props.variant].color_border_hover};
    color: ${(props) => colorsProps[props.variant].color_font_hover};
  }


  &:focus:not(:hover){
    background: ${(props) => props.outline ? colors.transparent : colorsProps[props.variant].color_bg_focus};
    border: ${borders.xs} solid ${(props) => colorsProps[props.variant].color_border_focus};
  }

  &:active{
    border: ${borders.xs} solid ${(props) => colorsProps[props.variant].color_border_click};
    color: ${(props) => colorsProps[props.variant].color_font_hover};
    background: ${(props) => colorsProps[props.variant].color_bg_click};
  }

  &.load, &.load:disabled{
    background: ${(props) => props.outline ? "transparent" : colorsProps[props.variant].color_bg_hover};
    border: ${borders.xs} solid ${(props) => colorsProps[props.variant].color_bg_hover};

    .ball{
      background-color: ${(props) => props.outline ? `${colors.primary}` : `${colors.white}`};
      opacity: 1;
    }
  }

  /* State disable */
  &:disabled{
    background: ${(props) => props.outline ? "transparent" : colorsProps[props.variant].color_bg_disable};
    border: ${borders.xs} solid ${(props) => colorsProps[props.variant].color_border_disable};
    color: ${(props) => props.outline ? colors.darkGray : colorsProps[props.variant].color_font_disable};

    &:hover{
      cursor: not-allowed;
    }
  }
  
  /* Animation load */
  div{
    cursor: wait !important;
    pointer-events: none !important;

    .ball{
      display: inline-block;
      width: 8px;
      height: 8px;
      margin-right: 0;
      border-radius: ${borders.lg};
      background-color: ${colors.white};
      opacity: 0.7;
      
      animation: ${loading} 0.8s 0.1s linear infinite;

      &:last-child{
        margin-right: 0px;
      }
    }

    .ball:nth-last-child(1) {
      animation-delay: 0.1s;
    }
    .ball:nth-last-child(2) {
      animation-delay: 0.2s;
    }
    .ball:nth-last-child(3) {
      animation-delay: 0.3s;
    }
  }
`
