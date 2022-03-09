import styled, { keyframes, css } from "styled-components";
import { shadows } from "../shared/template/shadows";
import {
  colors,
  spacings,
  borders,
  fontSizes,
  fontWeights,
} from '../shared/theme'
import { SelectSizeProps } from "./types";

type AppearWhereProps = "bottom" | "top";

interface SelectProps {
  block: boolean;
}

interface SelectHeaderProps {
  block: boolean;
  size: SelectSizeProps;
  readOnly: boolean;
  showDropdown: boolean;
  touched: boolean;
  appearWhere?: AppearWhereProps;
  error?: boolean;
  selected: boolean;
}

interface SelectOptionsContainerProps {
  selected: boolean,
  itemSelected: boolean,  
  minWidthOptions?: number,
  appearWhere?: AppearWhereProps,
}

const sizes = {
  small: "40px",
  large: "53px"
}

const fade = keyframes`
  from {
    opacity: 0;
  },
  to{
    opacity: 1;
  }
`

export const SelectWrapper = styled.div<SelectProps>`
  position: relative;
  display: ${props => props.block ? "block" : "inline"};
  width: 100%;
  margin-right: ${spacings.md};
  cursor: pointer;

  &:last-child{
    margin-right: 0;
  };
`

export const SelectHeader = styled.div<SelectHeaderProps>`
  width: 100%;
  max-width: ${props => props.block ? "100%" : "330px"};
  min-height: ${props => sizes[props.size]};
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  max-width: auto;
  min-height: ${props => sizes[props.size]};
  padding: 0 ${props =>  props.size === "small" ? `${spacings.sm}` : `${spacings.md}`};
  overflow: hidden;
  text-overflow: ellipsis;
  /* z-index: 0;  FICOU COMO 0 POIS NAS TELAS ONDE EXISTE UM DATEPICKER ACIMA, O SELECT SOBREPOE O CALENDAR DO DATEPICKER - REMOVER COMENTÁRIO AO SOLUCIONAR */

  border-radius: ${props => props.size === "small" ? `${borders.md}` : `${borders.lg}`};
  border: 2px solid ${colors.gray};
  ${({selected}) => selected && css`border: 2px solid ${colors.primary}`};
  ${({readOnly}) => readOnly && css`border: 2px solid ${colors.gray}`};
  ${({error}) => error && css`border: 2px solid ${colors.danger}`};

  .select {
    pointer-events: none;
    transition: all 0.2s linear;

    strong{
      font-family: 'DM Sans', sans-serif;
      font-style: normal;
      font-weight: ${fontWeights.w700};
      font-size: ${fontSizes.sm};
      color: ${props => props.readOnly ? colors.darkerGray : colors.darkestGray};
      text-overflow: ellipsis;
    }
  }

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    min-width: 24px;
    height: 24px;
    margin-left: ${spacings.sl};
    background: ${colors.gray};
    border-radius: ${borders.sm};
    border: none;
    ${(props) => props.readOnly && css`pointer-events: none;`}
    
    svg {
      transform: ${(props) => props.appearWhere === "bottom" ? "rotate(180deg)" : "rotate(0deg)"}
    }

    svg {
      transition: all 0.2s linear;
      ${(props) => props.showDropdown && css`
        animation: arrowEffectButton 5s linear infinite;
        transform: ${props.appearWhere === "bottom" ? "rotate(0deg)" : "rotate(180deg)"}
      `};
    }
      
    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const SelectOptionsContainer = styled.div<SelectOptionsContainerProps>`
  z-index: 10;
  ${props => props.selected ? "display: block;" : "display: none;"}
  position: absolute;
  left: 0px;
  width: 100%;
  height: auto;
  max-height: 200px;
  border-radius: ${borders.lg};
  background: ${colors.white};
  overflow: auto;
  box-shadow: ${shadows.lg};
  animation: ${fade} 0.2s linear;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`

export const SelectOptionsList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${spacings.sm};
  padding-right: ${spacings.sm};
`

export const Option = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  margin-top: ${spacings.sm};
  margin-bottom: ${spacings.sm};


  &.isActive{
    span{
      background: ${colors.primary};
    }
  }

  &.readOnly{
    background: red;
  }

  span{
    display: inline-block;
    position: absolute;
    height: 15px;
    width: 15px;
    margin-right: ${spacings.sm};
    border-radius: 50%;
    border: ${borders.xs} solid ${colors.primary};
    pointer-events: none;
  }
  
  strong{
    font-family: 'DM Sans', sans-serif;
    font-weight: ${fontWeights.w500};
    font-size: ${fontSizes.sm};
    color: ${colors.darkestGray};
    pointer-events: none;
    padding-left: 1.75rem;
  }

  &:hover{
    background-color: ${colors.white};
  }
`

export const SearchInputWrapper = styled.div`
  margin-top: 8px;
  width: 90%;
`

export const ErrorSpan = styled.span`
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 100%;
  padding-top: ${spacings.xs};
  padding-left: ${spacings.md};
  color: ${colors.danger};
  font-weight: ${fontWeights.w700};
  font-size: ${fontSizes.xs};
`

export const HiddenSelect = styled.select`
  display: none;
`