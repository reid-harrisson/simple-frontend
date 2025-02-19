import React, { useState } from "react";
import { Label, Input, Container, Button } from "./styles";
import { Eye, EyeClosed } from "lucide-react";

export interface TextInputProps {
  value?: string;
  setValue?: (value: string) => void;
  label: string;
  name: string;
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  className,
  name,
  value,
  setValue,
}) => {
  const [visible, setVisible] = useState(true);
  const [state, setState] = useState<{
    isFilled: boolean;
    isValid: boolean;
    isFocused: boolean;
  }>({
    isFilled: value ? true : false,
    isValid: true,
    isFocused: false,
  });

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setState({
      isValid: event.target.value == "invalid" ? false : true,
      isFilled: !!event.target.value,
      isFocused: false,
    });
  };

  const handleFocus = () => {
    setState({ ...state, isFocused: true, isFilled: true });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, isFilled: true });
    if (setValue) setValue(event.target.value);
  };

  return (
    <Container className={className} $state={state}>
      <Label $state={state}>{label}</Label>
      <Input
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        type={visible ? "password" : "normal"}
      />
      <Button tabIndex={-1} onClick={() => setVisible(!visible)}>
        {visible ? <Eye /> : <EyeClosed />}
      </Button>
    </Container>
  );
};
