import { ReactComponent as ContentSVG } from '../../../statics/svgs/content.svg';
import { ReactComponent as AssignmentSVG } from '../../../statics/svgs/assignment.svg';
import { ReactComponent as ProjectSVG } from '../../../statics/svgs/project.svg';
import { ReactComponent as QuizSVG } from '../../../statics/svgs/quiz.svg';

import { getGradeColor } from '../../../utils/grade';

import Heading from '../../atoms/heading-3';
import {
  Wrapper,
  IconWrapper,
  ContentWrapper,
  Description,
  Grade,
} from './item.styles';

export const TYPES = {
  CONTENT: 'content',
  ASSIGNMENT: 'assignment',
  PROJECT: 'project',
  QUIZ: 'quiz',
};

function getIcon(type) {
  switch (type) {
    case TYPES.CONTENT:
      return ContentSVG;
    case TYPES.ASSIGNMENT:
      return AssignmentSVG;
    case TYPES.PROJECT:
      return ProjectSVG;
    case TYPES.QUIZ:
      return QuizSVG;
    default:
      return null;
  }
}

function Item({ title, description, type, grade }) {
  return (
    <Wrapper>
      {getIcon(type) && (
        <IconWrapper className="icon_wrapper">
          {getIcon(type).render({ className: 'icon' })}
        </IconWrapper>
      )}
      <ContentWrapper>
        <Heading className="heading">{title}</Heading>
        <Description>{description}</Description>
        {grade && (
          <Grade color={getGradeColor(grade.max, grade.current)}>
            {grade.current}
          </Grade>
        )}
      </ContentWrapper>
    </Wrapper>
  );
}

export default Item;
