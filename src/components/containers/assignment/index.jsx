import { useMemo, useState } from 'react';
import Card from '../../atoms/card';
import Section from '../../molecules/section';
import InfoList from '../../atoms/info-list';
import RichText from '../../atoms/rich-text';
import List from '../../atoms/list';
import Attachment from '../../molecules/attachment';
import SubmissionCard from '../../organisms/submission-card';
import assignmentData from './dummy.data.json';

import faLang from '../../../statics/values/langs/fa.json';

function Index() {
  const [assignment] = useState(assignmentData);

  const infoItems = useMemo(
    () => [
      {
        id: 0,
        title: <span>{faLang.status}</span>,
        value: (
          <span
            className={assignment.status === 'active' ? 'success' : 'danger'}
          >
            {assignment.status === 'active' ? faLang.active : faLang.not_active}
          </span>
        ),
      },
      {
        id: 1,
        title: <span>{faLang.due}</span>,
        value: <span>{assignment.due.text}</span>,
      },
      {
        id: 2,
        title: <span>{faLang.grade}</span>,
        value: <span>{assignment.grade.max}</span>,
      },
    ],
    [assignment]
  );

  return (
    <div>
      <Card>
        <Section title={assignment.title}>
          <InfoList items={infoItems} />
        </Section>
        <Section title={faLang.description}>
          <RichText value={assignment.body} />
        </Section>
        <Section title={faLang.attachments}>
          <List
            items={assignment.attachments.map((cur) => (
              <Attachment {...cur} />
            ))}
          />
        </Section>
        <Section title={faLang.submission_list}>
          {
            <List
              items={assignment.submissions.map((cur) => (
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
