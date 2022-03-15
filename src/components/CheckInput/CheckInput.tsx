import * as React from 'react';
import { useRef } from 'react';
import { Box, Label, Mark } from './styles';
import { CheckInputProps } from './types';

const CheckInput: React.FC<CheckInputProps> = ({
  name,
  label,
  checked,
  value,
  error,
  errorMessage,
  readOnly,
  type = 'checkbox',
  checkedStyle,
  onCheckChange,
  ...props
}) => {
  const inputNode = useRef<HTMLInputElement>(null);
  const handleOnClick = () => {
    if (onCheckChange == null || inputNode.current == null || readOnly) {
      return;
    }
    onCheckChange(inputNode.current.checked, name);
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

export default CheckInput;