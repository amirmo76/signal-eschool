import styled from 'styled-components';
import colors from '../../../statics/values/colors.json';

export const ListWrapper = styled.div`
  margin: 4rem 0;
`;

export const Description = styled.p`
  margin-top: 1.6rem;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
`;

export const SubmissionHistoryButton = styled.button`
  font-family: inherit;
  border: none;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  &:hover {
    color: ${(props) => (props.disabled ? 'inherit' : colors.secondary_2)};
  }
`;
