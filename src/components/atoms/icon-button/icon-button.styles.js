import styled from "styled-components";
import colors from "../../../statics/values/colors.json";

export const StyledButton = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.bgLight ? colors.white_2 : colors.grey_2};
  }

  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    fill: currentColor;
  }
`;
