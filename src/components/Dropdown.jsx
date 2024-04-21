import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import {
  DropdownContainer,
  ToggleButton,
  DropdownSelectMenu,
  SelectButton,
  OptionItem,
  Checkbox,
  DropdownArrow,
} from "./StyledComponents";

const Dropdown = ({
  isMultiSelect,
  options,
  onSelect,
  label,
  scrollItems,
  showToggleArrow,
  noneOptionLabel,
  width,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleIsDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectAll = () => {
    if (options.length === selectedOptions.length) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options);
    }
  };

  const handleClickOption = (option) => {
    let newSelectedOptions;
    if (isMultiSelect) {
      newSelectedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((selectedOption) => selectedOption !== option)
        : [...selectedOptions, option];
    } else {
      if (option === noneOptionLabel) {
        setSelectedOptions([]);
        setIsDropdownOpen(false);
        return;
      }
      newSelectedOptions = [option];
      setIsDropdownOpen(false);
    }
    setSelectedOptions(newSelectedOptions);
    onSelect && onSelect(newSelectedOptions);
  };

  const memoizedOptions = useMemo(() => options, [options]);

  return (
    <DropdownContainer width={width}>
      {label && <label>{label}</label>}
      <ToggleButton onClick={toggleIsDropdownOpen}>
        {isMultiSelect
          ? selectedOptions.length > 0
            ? selectedOptions.map((option) => option.label).join(", ")
            : "Select options"
          : selectedOptions.length > 0
          ? selectedOptions[0].label
          : "Select an option"}
        {showToggleArrow && (
          <DropdownArrow isOpen={isDropdownOpen ? 1 : 0}>▼</DropdownArrow>
        )}
      </ToggleButton>
      {isDropdownOpen && (
        <>
          <DropdownSelectMenu hasScroll={memoizedOptions.length >= scrollItems}>
            {isMultiSelect && (
              <SelectButton onClick={selectAll}>
                {options.length === selectedOptions.length
                  ? "Deselect All"
                  : "Select All"}
              </SelectButton>
            )}
            {!isMultiSelect && noneOptionLabel && (
              <OptionItem onClick={() => handleClickOption(noneOptionLabel)}>
                {noneOptionLabel}
              </OptionItem>
            )}
            {memoizedOptions.map((option) => (
              <OptionItem
                key={option.value}
                onClick={() => handleClickOption(option)}
              >
                {isMultiSelect ? (
                  <>
                    <Checkbox
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleClickOption(option)}
                    />
                    {option.label}
                  </>
                ) : (
                  <span>{option.label}</span>
                )}
              </OptionItem>
            ))}
          </DropdownSelectMenu>
        </>
      )}
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  isMultiSelect: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func,
  label: PropTypes.string,
  scrollItems: PropTypes.number,
  showToggleArrow: PropTypes.bool,
  noneOptionLabel: PropTypes.string,
  width: PropTypes.string,
};

Dropdown.defaultProps = {
  isMultiSelect: false,
  onSelect: null,
  label: "",
  scrollItems: 4,
  showToggleArrow: true,
  noneOptionLabel: "None",
  width: "50%",
};

export default Dropdown;
