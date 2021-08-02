import { useState } from 'react';
import Card from '../../atoms/card';
import Section from '../../molecules/section';
import RichText from '../../atoms/rich-text';
import List from '../../atoms/list';
import Attachment from '../../molecules/attachment';
import Item from '../../molecules/item';
import contentData from './dummy.data.json';

import faLang from '../../../statics/values/langs/fa.json';

function Index() {
  const [content] = useState(contentData);

  return (
    <div>
      <Card>
        <Section title={content.title}>
          <RichText value={content.body} />
        </Section>
        <Section title={faLang.attachments}>
          <List
            items={content.attachments.map((cur) => (
              <Attachment {...cur} />
            ))}
          />
        </Section>
        <Section title={faLang.related_assignments}>
          <List
            items={content.assignments.map((cur) => (
              <Item {...cur} />
            ))}
          />
        </Section>
      </Card>
    </div>
  );
}

export default Index;
