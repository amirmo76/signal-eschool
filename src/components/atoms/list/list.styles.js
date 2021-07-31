import styled from 'styled-components';
import colors from '../../../statics/values/colors.json';
import { BorderCSS } from '../../../statics/styles/common.styles';

export const Wrapper = styled.ul`
  list-style-type: none;

  & > *:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Index = styled.div`
  border-radius: 50%;
  font-size: 1.6rem;
  background-color: ${colors.grey_2};
  padding: 0.5rem;
  ${BorderCSS};
  margin-left: 1.5rem;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
