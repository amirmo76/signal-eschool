import styled, { css } from "styled-components";
import colors from "../../../statics/values/colors.json";
import hexToRgb from "../../../utils/hex-to-rgb";

export const Wrapper = styled.div`
  width: 100%;
  font-size: inherit;
  direction: rtl;
  display: flex;
  flex-direction: column;
  position: relative;

  .right_icon {
    fill: ${colors.primary};
    width: 1.75rem;
    position: absolute;
    top: 50%;
    right: 1.75rem;
    transform: translateY(-50%);
  }
`;

export const Label = styled.label`
  font-size: 1.125em;
  font-weight: 500;
  color: ${colors.primary_2};
  margin-bottom: 1.7rem;
`;

const withRightIcon = css`
  padding-right: 4.75rem;
`;

export const StyledTextField = styled.input`
  font-family: inherit;
  font-size: inherit;
  color: ${colors.grey};
  font-weight: 500;
  border-radius: 1rem;
  background-color: ${colors.grey_2};
  border: 1px solid rgba(${hexToRgb(colors.primary)}, 0.1);
  padding: 2rem 2.8rem;

  &::placeholder {
    color: currentColor;
  }

  ${(props) => props.withRightIcon && withRightIcon}
`;
