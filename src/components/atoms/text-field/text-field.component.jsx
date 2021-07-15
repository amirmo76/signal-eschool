import { StyledTextField, Wrapper, Label } from "./text-field.styles";

function TextField({ id, label, formRef, RightIcon, ...otherProps }) {
  return (
    <Wrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      {RightIcon && <RightIcon className="right_icon" />}
      <StyledTextField
        id={id}
        {...formRef}
        {...otherProps}
        withRightIcon={RightIcon}
      />
    </Wrapper>
  );
}

export default TextField;
