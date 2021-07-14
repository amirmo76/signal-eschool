import { StyledTextField, Wrapper, Label } from "./text-field.styles";

function TextField({ id, label, formRef, ...otherProps }) {
  return (
    <Wrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledTextField id={id} {...formRef} {...otherProps} />
    </Wrapper>
  );
}

export default TextField;
