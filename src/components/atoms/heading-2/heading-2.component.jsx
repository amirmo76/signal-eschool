import { StyledHeading } from './heading-2.styles';

function Heading({ children, ...otherProps }) {
  return <StyledHeading {...otherProps}>{children}</StyledHeading>;
}

export default Heading;
