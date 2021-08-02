import { useMemo } from 'react';

import Card from '../../atoms/card';
import InfoList from '../../atoms/info-list';
import Heading from '../../atoms/heading-3';
import Button from '../../atoms/button';

import {
  Description,
  HeadingWrapper,
  ListWrapper,
  SubmissionHistoryButton,
} from './submission-card.styles';

import faLang from '../../../statics/values/langs/fa.json';
import { ReactComponent as ExtraSVG } from '../../../statics/svgs/extra.svg';

function SubmissionCard({
  title,
  description,
  types,
  grade,
  count,
  submitted,
  due,
  is_extra,
}) {
  const items = useMemo(() => {
    return [
      {
        id: 0,
        title: <span>{faLang.file_type}</span>,
        value: <span>{types}</span>,
      },
      {
        id: 1,
        title: <span>{faLang.grade}</span>,
        value: <span>{grade.max}</span>,
      },
      {
        id: 2,
        title: <span>{faLang.due}</span>,
        value: <span>{due.text}</span>,
      },
      {
        id: 3,
        title: <span>{faLang.allowed_submission_count}</span>,
        value: <span>{count === -1 ? faLang.infinite : count}</span>,
      },
      {
        id: 4,
        title: <span>{faLang.submissions_count}</span>,
        value: (
          <SubmissionHistoryButton
            disabled={!submitted}
          >{`${submitted} ${faLang.times}`}</SubmissionHistoryButton>
        ),
      },
    ];
  }, [types, grade, count, submitted, due]);

  return (
    <Card>
      <HeadingWrapper>
        <Heading>{title}</Heading>
        {is_extra && <ExtraSVG />}
      </HeadingWrapper>
      <Description>{description}</Description>
      <ListWrapper>
        <InfoList items={items} />
      </ListWrapper>
      <Button
        label={faLang.upload}
        expanded
        disabled={count !== -1 && count <= submitted}
      />
    </Card>
  );
}

export default SubmissionCard;
