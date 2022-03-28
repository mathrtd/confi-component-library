import * as React from 'react';
import { useState } from 'react';
import MaskedInput from 'react-text-mask'
import { eye } from '../../assets/svg/eye';
import { eyeCrossed } from '../../assets/svg/eye_crossed';
import { lockLocked } from '../../assets/svg/lock_locked';
import { lockUnlocked } from '../../assets/svg/lock_unlocked';
import { search } from '../../assets/svg/search';
import { DefaultInputWrapper } from './styles';
import { InputFormFieldProps, InputType } from './types';


const InputFormField = React.forwardRef<HTMLInputElement, InputFormFieldProps>(({
  label,
  value,
  defaultValue,
  error,
  errorMessage,
  helpMessage,
  block,
  width,
  mask,
  activeState,
  loading,
  inputType,
  className,
  hideCursor,
  onFocus,
  onBlur,
  onChange,
  onStateToggle,
  ...props
}, ref) => {
  const [localType, setLocalType] = useState<InputType | undefined>(inputType)

  const getIcon = () => {
    switch (inputType) {
      case 'encrypted':
        return activeState ? lockUnlocked : lockLocked
      case 'password':
        return localType === 'password' ? eyeCrossed : eye
      case 'search':
        return search
      case 'text':
        return null
    }
  }

  const onIconClick = () => {
    onStateToggle?.(!activeState)
    switch (inputType) {
      case 'password':
        setLocalType(localType === 'password' ? 'text' : 'password')
        break;
    }
  }

  return (
    <DefaultInputWrapper
      className={className}
      block={block}
      error={error}
      loading={loading}
      width={width}
      hideCursor={hideCursor}
    >
      <div className="formField-input">
        {mask ?
          <MaskedInput
            mask={mask}
            guide={false}
            onChange={onChange}
            {...props}
          /> :
          <input
            placeholder=' '
            value={value}
            defaultValue={defaultValue}
            type={localType === 'password' ? 'password' : 'text'}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={ref}
            {...props}
          />
        }
        <label>{label}</label>
        {
          inputType !== 'text'
            ? <div onClick={onIconClick}>
                {getIcon()}
              </div>
              : null
        }
      </div>

      {error ? <span>{errorMessage}</span> : !!helpMessage ? <span>{helpMessage}</span> : null}
    </DefaultInputWrapper>
  )
})

export default InputFormField;