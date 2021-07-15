import styled from "styled-components";
import colors from "../../../statics/values/colors.json";
import hextToRgb from "../../../utils/hex-to-rgb";

export const StyledCard = styled.div`
  border-radius: 2rem;
  width: 100%;
  background-color: ${colors.white_2};
  border: 1px solid rgba(${hextToRgb(colors.primary)}, 0.1);
  padding: 2.2rem 3rem;
  color: ${colors.primary};
`;
