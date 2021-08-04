import { css } from 'styled-components';
import hexToRgb from '../../utils/hex-to-rgb';
import colors from '../values/colors.json';

export const BorderCSS = css`
  border: 1px solid rgba(${hexToRgb(colors.primary)}, 0.1);
`;

export const ShadowCSS = css`
  box-shadow: rgba(${hexToRgb(colors.primary)}, 0.23) 0 1.5rem 2.5rem;
`;

export const SidebarCSS = css`
  padding: 4.5rem 0;
`;
