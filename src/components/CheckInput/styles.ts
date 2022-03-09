import styled from 'styled-components';
import { borders, colors, fontSizes, fontWeights, spacings } from '../shared/theme';
import { CheckedStyleProps, LabelProps } from './types';

const colorsProps:Record<CheckedStyleProps, string> = {
  'primary': colors.primary,
  'secondary': colors.darkerGray,
  'success': colors.success,
  'warning': colors.warning,
  'danger': colors.danger,
}

export const Label = styled.label<LabelProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding-left:  ${spacings.ls};
  cursor: pointer;
  pointer-events: ${props => props.readOnly ? 'none' : 'auto'};
  user-select: none;
  font-weight: ${fontWeights.w500};
  font-size: ${fontSizes.sm};
  color: ${colors.darkestGray};
  
  input:checked ~ span {
    background-color: ${
      props => props.readOnly 
        ? !!props.checkedStyle 
          ? colorsProps[props.checkedStyle]
          : colorsProps['secondary']
        : !!props.checkedStyle 
          ? colorsProps[props.checkedStyle]
          : colorsProps['primary']
    };
  }
`;

export const Box = styled.input.attrs({
  type: 'checkbox',
})`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;


  &:checked ~ span:after {
    display: block;
  }
`;

export const Mark = styled.span<LabelProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: ${colors.gray};
  border-radius: ${borders.sm};
  transition: 180ms ease-in-out;

  ${props => props.error ?
    `&:after { content: ''; position: absolute; left: 3px; top: 7px; width: calc(100% - 6px); height: 3px; background: ${colors.white}; transform: rotate(45deg);} &:before { content: ''; position: absolute; left: 3px; top: 7px; width: calc(100% - 6px); height: 3px; background: ${colors.white}; transform: rotate(-45deg);}`
    :
    `&:after { content: ''; position: absolute; display: none; left: 5.9px; top: 3px; width: 3px; height: 6px; border: solid ${colors.white}; border-width: 0 2px 2px 0; transform: rotate(45deg);}`
  }
`;
