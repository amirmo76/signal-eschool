import Heading2 from '../../atoms/heading-2';
import { Wrapper, Line } from './section-header.styles';

function SectionHeader({ children }) {
  return (
    <Wrapper>
      <Heading2>{children}</Heading2>
      <Line />
    </Wrapper>
  );
}

export default SectionHeader;
