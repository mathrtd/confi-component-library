import styled from "styled-components";
import { colors } from "../shared/theme";
import { ButtonLinkProps, IconContainerProps } from "./types";

export const DefaultButtonLink = styled.button.attrs({
  type: 'button'
})<ButtonLinkProps>`
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: ${colors.darkestGray};
  display: flex;
  ${(props) => props.icon && `flex-direction: ${props.iconSide === 'left' ? 'row-reverse' : 'row'}`}
`

export const IconContainer = styled.span<IconContainerProps>`
  ${(props) => props.iconSide === 'left'
      ? 'margin-right: 8px;'
      : 'margin-left: 8px;'
  }
`