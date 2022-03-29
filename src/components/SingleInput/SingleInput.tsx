import * as React from 'react';
import InputFormField from '../InputFormField';
import { DefaultSingleInput, HiddenInput } from './styles';
import { SingleInputProps } from './types';


const SingleInput: React.FC<SingleInputProps> = ({
  numberOfDigits = 1,
  ...props
}) => {
  const hiddenInput = React.useRef<any>(null);
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  const concatInputsValues = ():string => {
    let concat:string = '';
    for (var i = 0; i < inputRefs.current.length; ++i) {
      concat += inputRefs.current[i]?.value;
    }
    return concat;
  }

  const triggerOnChange = () => {
    const targetValue = concatInputsValues();
    const e = new Event("input", { bubbles: true })
    console.log(targetValue)
    hiddenInput.current.setAttribute('value', targetValue);
    hiddenInput.current.dispatchEvent(e);
  }
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const currentRefValue = inputRefs.current[index]?.value;
    const key = event.key;
    if (key.length === 1 || key === 'Backspace') {
      event.preventDefault();
      if (currentRefValue === '') {
        if (key === 'Backspace') {
          inputRefs.current[index-1]?.setAttribute('value', '');
          inputRefs.current[index-1]?.focus();
        } else {
            inputRefs.current[index]?.setAttribute('value', key[0]);
            inputRefs.current[index+1]?.focus();
        }
      } else {
        if (key === 'Backspace') {
          inputRefs.current[index]?.setAttribute('value', '');
          inputRefs.current[index-1]?.focus();
        } else {
          if (!(index === numberOfDigits - 1 && inputRefs.current[index]?.value !== '')) {
            inputRefs.current[index+1]?.focus();
            inputRefs.current[index+1]?.setAttribute('value', key[0]);
          }
        }
      }
      triggerOnChange();
    }
  }

  return (
    <>
      <HiddenInput
        onChange={props.onChange}
        ref={hiddenInput}
      />
      <DefaultSingleInput>
        {
          [...Array(numberOfDigits)].map((x, i) => {
            return <InputFormField 
              key={i}
              inputType="text"
              width={52}
              maxLength={1}
              value={props.value?.[i] ?? ''}
              style={{'textAlign': 'center'}}
              onChange={()=>{}}
              onKeyDown={(e) => handleKeyDown(e, i)}
              ref={ input => inputRefs.current[i] = input}
              hideCursor
            />
          })
        }
      </DefaultSingleInput>
    </>
  )
}

export default SingleInput;