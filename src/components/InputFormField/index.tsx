import * as React from 'react';
import { MouseEventHandler, useState } from 'react';
import MaskedInput from 'react-text-mask'
import { eye } from '../../assets/svg/eye';
import { eyeCrossed } from '../../assets/svg/eye_crossed';
import { lockLocked } from '../../assets/svg/lock_locked';
import { lockUnlocked } from '../../assets/svg/lock_unlocked';
import { search } from '../../assets/svg/search';
import { DefaultInputWrapper } from './styles';
import { InputFormFieldProps, InputType } from './types';


export const InputFormField = React.forwardRef<HTMLInputElement, InputFormFieldProps>(({
  label,
  value,
  defaultValue,
  error,
  errorMessage,
  helpMessage,
  block,
  mask,
  activeState,
  loading,
  inputType,
  onFocus,
  onBlur,
  onChange,
  onStateToggle,
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
      block={block}
      error={error}
      loading={loading}
    >
      <div className="formField-input">
        {mask ?
          <MaskedInput
            mask={mask}
            guide={false}
          /> :
          <input
            placeholder=' '
            value={value}
            defaultValue={defaultValue}
            type={localType === 'password' ? 'text' : 'password'}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={ref}
          />
        }
        <label>{label}</label>
        <div onClick={onIconClick}>
          {getIcon()}
        </div>
      </div>

      {error ? <span>{errorMessage}</span> : !!helpMessage ? <span>{helpMessage}</span> : null}
    </DefaultInputWrapper>
  )
})