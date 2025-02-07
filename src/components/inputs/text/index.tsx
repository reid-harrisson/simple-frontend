import React, { useState } from "react";
import { Label, Input, Container, States } from "./styles";

export interface InputProps {
  label: string;
  name: string;
  className?: string;
}

export const TextInput: React.FC<InputProps> = ({ label, className, name }) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [state, setState] = useState<States>(
    value ? States.Filled : States.Default
  );

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setState(event.target.value ? States.Filled : States.Default);
    setFocused(false);
  };

  const handleFocus = () => {
    setFocused(true);
    setState(States.Filled);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(States.Filled);
    setValue(event.target.value);
  };

  return (
    <Container className={className} $state={state} $focused={focused}>
      <Label $state={state} $focused={focused}>
        {label}
      </Label>
      <Input
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      />
    </Container>
  );
};
