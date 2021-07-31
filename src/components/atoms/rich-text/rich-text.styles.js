import styled from 'styled-components';

export const Wrapper = styled.div`
  p {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  img {
    width: 100%;
    border-radius: 1rem;
    display: block;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
