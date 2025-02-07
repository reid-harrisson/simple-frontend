import React from "react";
import { Container } from "./styles";

interface RoundButtonProps {
  disabled?: boolean;
  isLoading?: boolean;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export const RoundButton: React.FC<RoundButtonProps> = ({
  disabled,
  type,
  className,
  onClick,
  label,
}) => {
  return (
    <Container
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
    >
      {label}
    </Container>
  );
};
