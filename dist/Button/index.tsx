import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import { DefaultButton } from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = (
  {
    label,
    loading,
    disabled,
    block,
    spaceBetween,
    icon,
    iconHover,
    size = 'medium',
    iconSide = 'right',
    theme = 'backoffice',
    variant = 'primary',
    onClick,
    ...props
  }) => {
  const [localIcon, setLocalIcon] = useState(icon)

  if (loading) {
    disabled = true;
  }

  useEffect(() => { }, [localIcon])

  return (
    <DefaultButton
      disabled={disabled}
      block={block}
      iconSide={iconSide}
      spaceBetween={spaceBetween}
      variant={variant}
      className={classNames([
        loading,
        size,
      ])}
      onClick={onClick}
      onMouseOver={() => setLocalIcon(iconHover || icon)}
      onMouseLeave={() => setLocalIcon(icon)}
      {...props}
    >

      {loading
        ? <div>
            <div className="ball"></div>
            <div className="ball"></div>
            <div className="ball"></div>
          </div>
        : !!icon
          ? <>
              {iconSide === "left" ? label : <span>{localIcon}</span>}
              {iconSide === "left" ? <span>{localIcon}</span> : label}
            </>
          : <span>{label}</span>
      }

    </DefaultButton>
  )
}