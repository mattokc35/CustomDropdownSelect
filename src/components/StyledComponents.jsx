import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: ${(props) => props.width};
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ToggleButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  justify-content: space-between;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 4px;
`;

export const DropdownArrow = styled.span`
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const DropdownSelectMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  width: 99.5%;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  max-height: ${(props) => (props.hasScroll ? "150px" : "auto")};
  overflow-y: auto;
`;

export const SelectButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  text-align: left;
  width: 100%;
`;

export const OptionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  list-style: none;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 8px;
`;
