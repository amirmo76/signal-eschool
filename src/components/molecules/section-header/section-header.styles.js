import styled from 'styled-components';
import colors from '../../../statics/values/colors.json';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  & > *:not(:last-child) {
    margin-left: 3.3rem;
  }
`;

export const Line = styled.div`
  display: block;
  flex-grow: 1;
  height: 1px;
  background-color: ${colors.grey};
  opacity: 0.5;
`;
