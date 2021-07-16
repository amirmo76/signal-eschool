import styled from "styled-components";
import colors from "../../../statics/values/colors.json";

export const Wrapper = styled.div`
  width: 11.2rem;
  height: 11.2rem;
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  border: 3px solid ${colors.white_2};
  box-shadow: rgba(0, 0, 0, 0.17) 0rem 0.5rem 1.5rem;
`;

export const Image = styled.img`
  border-radius: inherit;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
