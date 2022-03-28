import styled, { css, keyframes } from 'styled-components';
import {
  colors,
  spacings,
  fontSizes,
  fontWeights,
  borders
} from '../shared/theme'
import { InputFormFieldProps } from './types';

const loading = keyframes`  
  from { transform: rotate(0deg) translateX(2.5px) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(2.5px) rotate(-360deg); }
`;

export const DefaultInputWrapper = styled.div<InputFormFieldProps>`
  position: relative;
  width: ${props => props.block ? "100%" : `${props.width ?? 330}px`};
  font-family: 'DM Sans', sans-serif;

  .formField-input{
    width: ${props => props.width ?? 330}px;
    position: relative;
    display: flex;
    
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }

    input {
      ${props => props.hideCursor ? 'caret-color: transparent;' : ''}
      border: ${props => props.error ? `${borders.xs} solid ${colors.danger}` : `${borders.xs} solid ${colors.darkGray}`};
      outline: none;
      width: 100%;
      padding: 16px;
      color: ${colors.darkestGray};
      font-weight: ${fontWeights.w700};
      font-size: ${fontSizes.sm};
      background: ${colors.white};
      box-shadow: 0 0 0 30px inset;
      -webkit-box-shadow: 0 0 0 30px ${colors.white} inset;
      transition: all 0.3s ease-out;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -webkit-appearance: none;
      border-radius: ${borders.lg};

      &:not(:placeholder-shown){
        border: ${props => props.error ? `${borders.xs} solid ${colors.danger}` : `${borders.xs} solid ${colors.primary}`};
      }
      
      &:read-only {
        border: ${borders.xs} solid ${colors.darkGray};
        color: ${colors.darkerGray};
      }
      
      &:focus:not(:read-only) {
        border: ${props => props.error ? `${borders.xs} solid ${colors.danger}` : `${borders.xs} solid ${colors.primary}`};
      }
      
      &::placeholder {
        color: transparent;
      }
      
      &:focus + label,
      &:not(:placeholder-shown) + label {
        top: 0%;
        font-size: ${fontSizes.sl};
        color: ${colors.darkestGray};
      }
      
    }
    

    label {
      pointer-events: none;
      position: absolute;
      top: 24px;
      left: 15px;
      padding: 0px ${spacings.xs};
      font-size: ${fontSizes.sm};
      color: ${colors.darkestGray};
      font-weight: ${fontWeights.w700};
      background: ${colors.white};
      transform: translateY(-50%);
      transition: all 0.3s ease-out;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
    }

    div{
      display: inline-block;
      position: absolute;
      top: 50%;
      right: 5px;
      padding: ${spacings.sm};
      transform: translateY(-50%);
      &:not(.disabled) {
        cursor: pointer;
      }
      svg{
        animation: ${props => props.loading ? loading : ""} 1.5s linear infinite;
      }
    }
    
  }

  span{
    position: absolute;
    width: 100%;
    padding-top: ${spacings.xs};
    padding-left: ${spacings.md};
    color: ${props => props.error ? `${colors.danger}` : `${colors.darkerGray}`};
    font-weight: ${fontWeights.w700};
    font-size: ${fontSizes.xs};
  }
`