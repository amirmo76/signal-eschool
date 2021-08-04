import styled from 'styled-components';
import colors from '../../../statics/values/colors.json';

export const Wrapper = styled.div`
  display: flex;
  direction: ltr;
  justify-content: center;
  margin: 5rem 0;
`;

export const Digit = styled.span`
  width: 4.5rem;
  height: 7.5rem;
  background-color: ${colors.black_2};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 500;
  border-radius: 1rem;
`;

export const Number = styled.div`
  display: flex;
  & > *:first-child {
    margin-right: 1rem;
  }
`;

export const Circle = styled.span`
  display: block;
  border-radius: 50%;
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${colors.black_2};
  &:first-child {
    margin-bottom: 0.7rem;
  }
`;

export const Colon = styled.div`
  margin: 0 2.5rem;
  align-self: center;
`;
