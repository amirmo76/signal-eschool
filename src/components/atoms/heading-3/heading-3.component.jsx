import { StyledHeading } from './heading-3.styles';

function Heading({ children, ...otherProps }) {
  return <StyledHeading {...otherProps}>{children}</StyledHeading>;
}

export default Heading;
