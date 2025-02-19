import styled from "styled-components";

const colors = {
  label: "#525252",
  text: "#4b4b4b",
  focused: "#1E90FF",
  invalid: "#FF0000",
  border: "#5252521a",
  background: "#FFFFFF",
};

const _ = {
  label: "#6F5883",
  text: "#5B415B",
  focused: "#1E90FF",
  invalid: "#FF0000",
  border: "#5B415B1A",
  background: "#FFFFFF",
};

export const Label = styled.label<{
  $state: {
    isFilled: boolean;
    isValid: boolean;
    isFocused: boolean;
  };
}>`
  font-size: 15px;
  position: absolute;
  margin-left: 20px;
  font-weight: 500;
  transition: all 200ms;
  color: ${({ $state }) => {
    if ($state.isFilled && $state.isFocused) return colors.focused;
    if (!$state.isValid) return colors.invalid;
    return colors.label;
  }};
  top: ${({ $state }) => ($state.isFilled ? 3 : 10)}px;
  font-size: ${({ $state }) => ($state.isFilled ? 12 : 15)}px;
`;

export const Input = styled.input`
  border: none;
  font-size: 15px;
  color: ${colors.text};
  background-color: transparent;
  padding: 18px 45px 2px 15px;
  font-weight: normal;
  z-index: 1;
  width: 100%;
`;

export const Button = styled.button`
  position: absolute;
  top: 9px;
  right: 15px;
  background: transparent;
  border: none;
  color: ${colors.label};
  cursor: pointer;
  z-index: 1;
  opacity: 0.5;

  &:hover {
    opacity: 0.4;
  }

  &:active {
    opacity: 0.3;
  }
`;

export const Container = styled.div<{
  $state: {
    isFilled: boolean;
    isValid: boolean;
    isFocused: boolean;
  };
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.background};
  transition: border 200ms;
  border-radius: 10px;
  border: 2px solid;
  border-color: ${({ $state }) => {
    if ($state.isFocused) return colors.focused;
    if (!$state.isValid) return colors.invalid;
    return colors.border;
  }};
`;
