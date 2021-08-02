import { Link } from 'react-router-dom';
import faLang from '../../../statics/values/langs/fa.json';
import Card from '../../atoms/card';
import Section from '../../molecules/section';
import Item from '../../molecules/item';
import List from '../../atoms/list';
import { past, current } from './dummy.data.json';

function Index() {
  return (
    <div>
      <Card>
        <Section title={faLang.current_quizes}>
          <List
            items={current.map((cur) => (
              <Link to={`/panel/quiz/${cur.id}`}>
                <Item {...cur} />
              </Link>
            ))}
          />
        </Section>
        <Section title={faLang.past_quizes}>
          <List
            items={past.map((cur) => (
              <Link to={`/panel/quiz/${cur.id}`}>
                <Item {...cur} />
              </Link>
            ))}
          />
        </Section>
        <Section title={faLang.quizes_progress}>Chart Placeholder</Section>
      </Card>
    </div>
  );
}

export default Index;
