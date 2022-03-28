import * as React from 'react';
import { ButtonLinkProps } from './types';
import { iconArrowLeft } from '../../assets/svg/arrow_left';
import { iconArrowRight } from '../../assets/svg/arrow_right';
import { DefaultButtonLink, IconContainer } from './styles';

const ButtonLink: React.FC<ButtonLinkProps> = ({
  label,
  icon,
  iconSide,
  onClick,
}) => {
  return (
    <DefaultButtonLink
      onClick={onClick}
      icon={icon}
      iconSide={iconSide}
    >
      {label}
      <IconContainer iconSide={iconSide}>
        {icon && (iconSide === 'left' ? iconArrowLeft : iconArrowRight)}
      </IconContainer>
    </DefaultButtonLink>
  )
}

export default ButtonLink;