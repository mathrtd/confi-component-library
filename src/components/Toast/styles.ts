import styled, { keyframes } from 'styled-components';
import { shadows } from '../shared/template/shadows';
import { borders, colors, fontSizes, fontWeights, spacings } from '../shared/theme';
import { ElementTypeProps, ToastPositionProps, ToastProps } from './types';

const colorProps:Record<ElementTypeProps, string> = {
  success: colors.success,
  error: colors.danger,
  warning: colors.warning,
}

const positionProps:Record<ToastPositionProps, string> = {
  bottomLeft: `
    bottom: 0;
    left: 0;
  `,
  bottomRight: `
    bottom: 0;
    right: 0;
  `,
  topLeft: `
    top: 0;
    left: 0;
  `,
  topRight: `
    top: 0;
    right: 0;
  `
}

const loading = keyframes`  
  from{
    width: 0%;
  }
  to{
    width: 100%;
  }
`;

const entrance = keyframes`  
 0%{
    transform: scale(0);
  }
  25%{
    transform: scale(1.1);
  }
  50%{
    transform: scale(0.9);
  }
  100%{
    transform: scale(1);
  }
`;

export const ToastContainer = styled.div<ToastProps>`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  color: ${colors.darkestGray}; 
  margin: 0px;

  position: fixed;
  ${(props) => positionProps[props.position ?? 'topRight']}
  margin: 1%;
  
  z-index: 99;
  overflow: hidden;
  max-width: 320px;

  box-shadow:${shadows.md};
  border-radius: ${borders.md};
  
  background: ${colors.white};
  animation: ${entrance} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  
  .toast-content{
    display: flex;
    align-items: center;
    padding: ${spacings.ls};
    font-weight: ${fontWeights.w700};
    font-size: ${fontSizes.sm};
    color: ${colors.darkestGray};
    border: ${borders.xs} solid ${props => colorProps[props.elementType ?? 'success']};
    border-top-left-radius: ${borders.md};
    border-top-right-radius: ${borders.md};

    .toast-content-icon{
      width: 16px;
      height: 16px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      background-color: ${props => colorProps[props.elementType ?? 'success']};
      margin-right: ${spacings.sl};
      svg {
        stroke: white;
      }
    }
  }

  .toast-content-timer{
    position: relative;
    height: ${spacings.sl};
    background: ${props => colorProps[props.elementType ?? 'success']};
    opacity: 0.3;
  }

  span{
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: block;
    width: 0%;
    height: ${spacings.sl};
    background: ${props => colorProps[props.elementType ?? 'success']};
    animation: ${loading} 3s linear both;
  }
`