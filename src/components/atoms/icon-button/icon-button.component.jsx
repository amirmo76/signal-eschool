import { StyledButton } from './icon-button.styles';

function IconButton({ Icon, bgLight, ...otherProps }) {
  return (
    <StyledButton bgLight={bgLight} {...otherProps}>
      <Icon className="icon" />
    </StyledButton>
  );
}

export default IconButton;
