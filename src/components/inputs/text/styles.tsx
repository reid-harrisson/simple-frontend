import styled, { css } from "styled-components";

export enum States {
  Default = "DEFAULT",
  Filled = "FILLED",
  Invalid = "INVALID",
}

const colors = {
  label: "#6F5883",
  text: "#5B415B",
  focused: "#1E90FF",
  invalid: "#FF0000",
  border: "#5B415B1A",
  background: "#FFFFFF",
};

const labelStyles = (state: States) => css`
  color: ${colors.label};
  margin-top: ${state === States.Default ? "10px" : "3px"};
  font-size: ${state === States.Default ? "15px" : "12px"};
`;

const borderStyles = (state: States) => css`
  border: 2px solid ${state === States.Invalid ? colors.invalid : colors.border};
  border-color: ${colors.border};
`;

export const Label = styled.label<{ $state: States; $focused: boolean }>`
  font-size: 15px;
  position: absolute;
  margin-left: 20px;
  font-weight: 500;
  transition: all 200ms;
  ${({ $state }) => labelStyles($state)}
  color: ${({ $focused, $state }) =>
    $focused && $state === States.Filled ? colors.focused : colors.label};
`;

export const Input = styled.input`
  border: none;
  font-size: 15px;
  color: ${colors.text};
  background-color: transparent;
  padding: 18px 15px 2px 15px;
  font-weight: normal;
  z-index: 1;
  width: 100%;
`;

export const Container = styled.div<{ $state: States; $focused: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.background};
  transition: border 200ms;
  border-radius: 10px;
  ${({ $state }) => borderStyles($state)}
  border-color: ${({ $focused, $state }) =>
    $focused && $state === States.Filled ? colors.focused : colors.border};
`;
