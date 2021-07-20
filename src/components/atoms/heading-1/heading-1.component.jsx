import { StyledHeading } from './heading-1.styles';

function Heading({ children, ...otherProps }) {
  return <StyledHeading {...otherProps}>{children}</StyledHeading>;
}

export default Heading;
