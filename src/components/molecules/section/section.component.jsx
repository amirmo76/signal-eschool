import SectionHeader from '../section-header';
import { Wrapper } from './section.styles';

function Section({ children, title }) {
  return (
    <Wrapper>
      <SectionHeader>{title}</SectionHeader>
      {children}
    </Wrapper>
  );
}

export default Section;
