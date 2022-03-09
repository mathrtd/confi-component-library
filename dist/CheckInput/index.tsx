import * as React, { forwardRef, useRef } from 'react';
import { Box, Label, Mark } from './styles';
import { CheckInputProps } from './types';

export const CheckInput: React.FC<CheckInputProps> = ({
  name,
  label,
  checked,
  value,
  error,
  errorMessage,
  readOnly,
  type = 'checkbox',
  checkedStyle,
  onChange,
  ...props
}) => {
  const inputNode = useRef<HTMLInputElement>(null);
  const handleOnClick = () => {
    if (onChange == null || inputNode.current == null || readOnly) {
      return;
    }
    onChange(inputNode.current.checked, name);
    inputNode.current.focus();
  }

  return (
    <Label
      readOnly={readOnly}
      error={error}
      checkedStyle={checkedStyle}
    >
      {label}

      <Box
        ref={inputNode}
        name={name}
        checked={checked}
        value={value}
        onClick={handleOnClick}
        {...props}
      />
      <Mark error={error} />
    </Label>
  );
};
