import styled from 'styled-components';
import colors from '../../../statics/values/colors.json';
import hexToRgb from '../../../utils/hex-to-rgb';
import { BorderCSS, ShadowCSS } from '../../../statics/styles/common.styles';

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 2rem;
  padding: 1.5rem;
  background-color: ${colors.grey_2};
  display: flex;
  color: ${colors.primary};
  cursor: pointer;
  ${BorderCSS};
  transition: all 0.2s ease-out;

  .heading {
    margin-bottom: 0.5rem;
  }

  &:hover {
    color: ${colors.white};
    background-color: ${colors.primary};
    ${ShadowCSS};
  }

  &:hover .icon_wrapper {
    color: ${colors.primary};
    background-color: ${colors.white};
    box-shadow: rgba(${hexToRgb(colors.white)}, 0.1) 0 0.3rem 1.5rem;
  }
`;

export const IconWrapper = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 1.5rem;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(${hexToRgb(colors.primary)}, 0.2) 0 0.3rem 1.5rem;
  margin-left: 2rem;
  color: ${colors.white};
  transition: all 0.2s ease-out;

  .icon {
    fill: currentColor;
    width: 3.2rem;
  }
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  padding-top: 0.75rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;
