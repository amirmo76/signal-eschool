import styled from "styled-components";
import colors from "../../../statics/values/colors.json";

export const StyledNav = styled.nav`
  width: 100%;
  padding: 2.5rem 0;
  color: ${colors.primary};
  display: flex;
  align-items: center;

  .logo {
    width: 7.5rem;
  }
`;

export const Title = styled.h1`
  margin-right: 2rem;
`;

export const SearchWrapper = styled.form`
  width: 40rem;
  margin-right: 6rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  & > *:not(:last-child) {
    margin-left: 2rem;
  }
`;
