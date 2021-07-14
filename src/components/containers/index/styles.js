import styled from "styled-components";
import colors from "../../../statics/values/colors.json";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;

  .hero {
    position: fixed;
    top: 50%;
    left: 10rem;
    transform: translateY(-50%);
    width: 57rem;
    z-index: 2;
  }

  .circle {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    height: 100vh;
  }
`;

export const RightWrapper = styled.div`
  max-width: 52rem;
  position: relative;
  z-index: 3;
  margin-right: 7.5rem;
  padding: 5rem 0;
`;

export const Header = styled.header`
  margin-bottom: 4rem;
  color: ${colors.black_2};
`;

export const Description = styled.p`
  font-size: 2rem;
  text-align: right;
  direction: rtl;
  font-weight: 500;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  color: ${colors.primary_2};
  font-size: 1.6rem;
  font-weight: 500;

  .signup {
    display: flex;
    .link {
      margin-right: 0.5rem;
    }
  }

  .link {
    color: ${colors.grey};
    cursor: pointer;

    &:hover {
      color: ${colors.secondary_2};
    }
  }
`;
