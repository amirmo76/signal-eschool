import faLang from '../../../statics/values/langs/fa.json';
import Card from '../../atoms/card';
import Section from '../../molecules/section';
import Item from '../../molecules/item';
import List from '../../atoms/list';
import { items } from './dummy.data.json';

function Index() {
  return (
    <div>
      <Card>
        <Section title={faLang.contents_title}>
          <List
            items={items.map((cur) => (
              <Item {...cur} />
            ))}
          />
        </Section>
      </Card>
    </div>
  );
}

export default Index;
