import React, { ChangeEvent, useRef, useState } from "react";
import { iconArrowTop } from "../../assets/svg/arrow_top";
import { InputFormField } from "../InputFormField";
import { ErrorSpan, HiddenSelect, Option, SearchInputWrapper, SelectHeader, SelectOptionsContainer, SelectOptionsList, SelectWrapper } from "./styles";
import { SelectProps } from "./types";

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  readOnly = false,
  selectSize = "large",
  block = false,
  value,
  error,
  errorMessage,
  search,
  searching,
  onChange,
  onSearchInputChange,
  ...props
}) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(!!value);
  const hiddenSelect = useRef<any>(null);
  const selectRef = useRef<any>(null);

  const handleOptionSelected = (event: any) => {
    const targetValue = event.target.dataset.value
    const e = new Event("change", { bubbles: true })
    hiddenSelect.current.value = targetValue;
    hiddenSelect.current.dispatchEvent(e);
    setTouched(true);
    setShowDropdown(false);
  }

  const handleShowDropdown = () => {
    if (readOnly) return;
    setShowDropdown(!showDropdown);
  }

  return (
    <SelectWrapper
      block={block}
      ref={selectRef}
      >
      <HiddenSelect
        onChange={onChange}
        name={name}
        value={value}
        ref={hiddenSelect}
        {...props["aria-hidden"]}
        {...props["aria-labelledby"]}
      >
        <option disabled/>
        {options.map((option, index) => (
          <option key={option.label+index} value={option.value}>
            {option.label}
          </option>
        ))}
      </HiddenSelect>
      <SelectHeader
        block={block}
        size={selectSize}
        readOnly={readOnly}
        showDropdown={showDropdown}
        touched={touched}
        onClick={handleShowDropdown}
        selected={value !== "0" && value !== "undefined" && value !== label && !!value}
        error={error}
      >
        <div className="select">
          <strong>
            {
              options?.find((option) => option.value == value)?.label ?? label
            }
          </strong>
        </div>
        <button type="button">{iconArrowTop}</button>
      </SelectHeader>

      <SelectOptionsContainer
        selected={showDropdown}
        itemSelected={false}
      >
        <SelectOptionsList>
          {
            search &&
            <SearchInputWrapper>
              <InputFormField
                name={`${name}Search`}
                label={'Busca'} 
                inputType="search"
                loading={searching}
                
                block
                onChange={(e) => onSearchInputChange?.(e)}
              />
            </SearchInputWrapper>
          }
          {options.map((option) => (
            <Option
              key={option.value}
              data-value={option.value}
              data-label={option.label}
              data-select-name={name}
              onClick={(e) => handleOptionSelected(e)}
              className={value == option.value ? "isActive" : ""}          
            >
              <span></span>
              <strong>{option.label}</strong>
            </Option>
          ))}
        </SelectOptionsList>
      </SelectOptionsContainer>
      {error ? <ErrorSpan>{errorMessage}</ErrorSpan> : null}
    </SelectWrapper>
  )
}