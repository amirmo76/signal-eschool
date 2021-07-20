import { ReactComponent as ContentSVG } from '../../../statics/svgs/content.svg';
import { ReactComponent as AssignmentSVG } from '../../../statics/svgs/assignment.svg';
import { ReactComponent as ProjectSVG } from '../../../statics/svgs/project.svg';
import { ReactComponent as QuizSVG } from '../../../statics/svgs/quiz.svg';

import Heading from '../../atoms/heading-3';
import {
  Wrapper,
  IconWrapper,
  ContentWrapper,
  Description,
} from './item.styles';
import { useEffect } from 'react';

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
      </ContentWrapper>
    </Wrapper>
  );
}

export default Item;
