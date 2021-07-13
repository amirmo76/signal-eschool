import Button from "../../atoms/button";
import faLang from "../../../statics/values/langs/fa.json";
import HeadingOne from "../../atoms/heading-1";
import { ReactComponent as HeroSVG } from "../../../statics/svgs/hero.svg";
import { ReactComponent as Circle } from "../../../statics/svgs/main-circle.svg";
import { Header, Description, RightWrapper, Wrapper } from "./styles";

function Index() {
  return (
    <Wrapper>
      <HeroSVG className="hero" />
      <Circle className="circle" />
      <RightWrapper>
        <Header>
          <HeadingOne>{faLang.main.title}</HeadingOne>
          <Description>{faLang.main.description}</Description>
        </Header>
        <Button label={faLang.login} isLoading={false} expanded />
      </RightWrapper>
    </Wrapper>
  );
}

export default Index;
