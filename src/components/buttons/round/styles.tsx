import styled, { css } from "styled-components";

const colors = {
  label: "#FFFFFF",
  shadow: "#292929C2",
  background: "#292929",
};

const _ = {
  label: "#FFFFFF",
  shadow: "#D3126E",
  background: "#D3126E",
};

const buttonStyles = css`
  align-items: center;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  gap: 5px;
  justify-content: center;
  min-width: fit-content;
  padding: 10px 15px;
  width: 100%;
`;

const opacties = {
  default: 1,
  hover: 0.8,
  active: 0.7,
  disabled: 0.7,
};

export const Container = styled.button`
  ${buttonStyles}
  color: ${colors.label};
  background-color: ${colors.background};
  opacity: ${opacties.default};
  transition: all 200ms;
  &:focus {
    opacity: ${opacties.hover};
  }
  &:hover {
    opacity: ${opacties.hover};
  }
  &:active {
    opacity: ${opacties.active};
  }
  &:disabled {
    opacity: ${opacties.disabled};
  }
`;
