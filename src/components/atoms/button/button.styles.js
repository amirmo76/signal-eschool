import styled, { css } from 'styled-components';
import colors from '../../../statics/values/colors.json';
import HexToRgb from '../../../utils/hex-to-rgb';

const expandedCSS = css`
  width: 100%;
`;

const disabledCSS = css`
  cursor: default;
  background-color: ${colors.grey};

  &:hover {
    background-color: ${colors.grey};
    box-shadow: none;
  }
`;

export const StyledButton = styled.button`
  font-family: inherit;
  font-size: 2rem;
  border: none;
  background-color: ${colors.secondary_2};
  color: ${colors.white};
  border-radius: 1rem;
  padding: 2rem 10rem;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: ${colors.primary};
    box-shadow: rgba(${HexToRgb(colors.primary)}, 0.23) 0 0.5rem 1.5rem;
  }

  .loading {
    width: 2.5rem;
    height: 2.5rem;
  }

  ${(props) => props.expanded && expandedCSS};
  ${(props) => props.disabled && disabledCSS};
`;
