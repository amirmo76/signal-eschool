import styled from 'styled-components';
import colors from '../../../statics/values/colors.json';
import { BorderCSS, ShadowCSS } from '../../../statics/styles/common.styles';

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 2rem;
  padding: 2rem 3rem;
  background-color: ${colors.grey_2};
  display: flex;
  color: ${colors.primary};
  ${BorderCSS};
  transition: all 0.2s ease-out;

  .heading {
    margin-bottom: 0.5rem;
  }
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  position: relative;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Download = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;
