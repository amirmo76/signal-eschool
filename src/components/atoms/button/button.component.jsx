import { StyledButton } from './button.styles';
import { ReactComponent as LoadingSVG } from '../../../statics/svgs/rolling-1s-200px.svg';

function Button({ label, isLoading, expanded, disabled, ...otherProps }) {
  return (
    <StyledButton expanded={expanded} disabled={disabled} {...otherProps}>
      {isLoading ? <LoadingSVG className="loading" /> : label}
    </StyledButton>
  );
}

export default Button;
