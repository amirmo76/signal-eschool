import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr 29rem;
  grid-column-gap: 3rem;
  padding: 0 2.5rem;

  .toolbar,
  .footer {
    grid-column: 1/-1;
  }

  .toolbar {
    margin-bottom: 4rem;
  }
`;
