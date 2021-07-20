import faLang from '../../../statics/values/langs/fa.json';
import Card from '../../atoms/card';
import Section from '../../molecules/section';
import Item from '../../molecules/item';
import { Wrapper, QuickAccessGrid } from './styles';

import data from './dummy.data';

function Index() {
  return (
    <Wrapper>
      <Card>
        <Section title={faLang.grades_progress}>Chart placeholder</Section>
        <Section title={faLang.quick_access}>
          <QuickAccessGrid>
            {data.quick_access.map((cur) => (
              <Item key={cur.id} {...cur} />
            ))}
          </QuickAccessGrid>
        </Section>
      </Card>
    </Wrapper>
  );
}

export default Index;
