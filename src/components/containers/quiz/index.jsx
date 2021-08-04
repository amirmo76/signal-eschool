import { useState } from 'react';
import dayjs from 'dayjs';
import Card from '../../atoms/card';
import Section from '../../molecules/section';
import ItemInfo from '../../organisms/item-info';
import RichText from '../../atoms/rich-text';
import List from '../../atoms/list';
import Attachment from '../../molecules/attachment';
import SubmissionCard from '../../organisms/submission-card';
import Countdown from '../../atoms/countdown';
import quizData from './dummy.data.json';

import faLang from '../../../statics/values/langs/fa.json';

function Index() {
  const [quiz] = useState(quizData);
  return (
    <div>
      <Card>
        <Countdown startUnix={dayjs(quiz.due).unix()} />
        <Section title={quiz.title}>
          <ItemInfo {...quiz} />
        </Section>
        <Section title={faLang.description}>
          <RichText value={quiz.body} />
        </Section>
        <Section title={faLang.attachments}>
          <List
            items={quiz.attachments.map((cur) => (
              <Attachment {...cur} />
            ))}
          />
        </Section>
        <Section title={faLang.submission_list}>
          {
            <List
              items={quiz.submissions.map((cur) => (
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
