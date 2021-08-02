import { useState } from 'react';
import Card from '../../atoms/card';
import Section from '../../molecules/section';
import ItemInfo from '../../organisms/item-info';
import RichText from '../../atoms/rich-text';
import List from '../../atoms/list';
import Attachment from '../../molecules/attachment';
import SubmissionCard from '../../organisms/submission-card';
import projectData from './dummy.data.json';

import faLang from '../../../statics/values/langs/fa.json';

function Index() {
  const [project] = useState(projectData);

  return (
    <div>
      <Card>
        <Section title={project.title}>
          <ItemInfo {...project} />
        </Section>
        <Section title={faLang.description}>
          <RichText value={project.body} />
        </Section>
        <Section title={faLang.attachments}>
          <List
            items={project.attachments.map((cur) => (
              <Attachment {...cur} />
            ))}
          />
        </Section>
        <Section title={faLang.submission_list}>
          {
            <List
              items={project.submissions.map((cur) => (
                <SubmissionCard {...cur} />
              ))}
            />
          }
        </Section>
      </Card>
    </div>
  );
}

export default Index;
