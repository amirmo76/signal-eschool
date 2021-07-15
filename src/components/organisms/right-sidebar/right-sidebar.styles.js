import styled, { css } from "styled-components";
import colors from "../../../statics/values/colors.json";

export const Wrapper = styled.div`
  padding: 2.5rem 0;
`;

export const ProfileWrapper = styled.div`
  font-weight: 500;
`;

export const Navigation = styled.ul`
  list-style-type: none;
  margin-top: 2rem;
`;

const activeStyles = css`
  color: ${colors.primary};
`;

export const NavigationItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.9rem;
  border-radius: 1rem;
  color: ${colors.grey};

  ${(props) => props.active && activeStyles};

  &:hover {
    background-color: ${colors.grey_2};
    color: ${colors.primary_2};
    cursor: pointer;
  }

  .icon {
    margin-left: 2rem;
    fill: currentColor;
    width: 1.8rem;
  }
`;

export const Fullname = styled.p`
  color: ${colors.black_2};
  font-size: 1.8rem;
  width: 100%;
  text-align: center;
`;

export const ClassroomCode = styled.p`
  margin-top: 0.5rem;
  font-size: 1.4rem;
  width: 100%;
  text-align: center;
  color: ${colors.primary};
`;
