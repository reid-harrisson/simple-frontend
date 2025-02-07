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
  margin-top: ${state === States.Default ? "12px" : "4px"};
  font-size: ${state === States.Default ? "15px" : "12px"};
`;

const borderStyles = (state: States) => css`
  border: 2px solid ${state === States.Invalid ? colors.invalid : colors.border};
  border-color: ${colors.border};
`;

export const Label = styled.label<{ $state: States; $focused: boolean }>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
  line-height: 1.35;
  font-size: 15px;
  position: absolute;
  margin-left: 20px;
  font-weight: 500;
  transition: all 200ms;
  ${({ $state }) => labelStyles($state)}
  ${({ $focused, $state }) =>
    $focused && $state === States.Filled
      ? "color: " + colors.focused + ";"
      : ""}
`;

export const Input = styled.input<{ $state: States }>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
  line-height: 1.35;
  font-size: 15px;
  color: ${colors.text};
  background-color: transparent;
  padding: 17px 15px 3px 15px;
  transition: border 200ms;
  border-radius: 10px;
  font-weight: normal;
  ${({ $state }) => borderStyles($state)}
  z-index: 1;
  width: 100%;
  &:focus {
    border-color: ${colors.focused};
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
  line-height: 1.35;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.background};
`;
