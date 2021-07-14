// ndoe_modules
import { useForm } from "react-hook-form";
// Components
import Button from "../../atoms/button";
import TextField from "../../atoms/text-field";
import HeadingOne from "../../atoms/heading-1";
// Statics
import faLang from "../../../statics/values/langs/fa.json";
import { ReactComponent as HeroSVG } from "../../../statics/svgs/hero.svg";
import { ReactComponent as Circle } from "../../../statics/svgs/main-circle.svg";
// Styles
import {
  Header,
  Description,
  RightWrapper,
  Wrapper,
  LoginForm,
  LoginOptions,
} from "./styles";

function Index() {
  const { handleSubmit, register } = useForm();

  const onLoginSubmit = (data) => console.log(data);

  return (
    <Wrapper>
      <HeroSVG className="hero" />
      <Circle className="circle" />
      <RightWrapper>
        <Header>
          <HeadingOne>{faLang.main.title}</HeadingOne>
          <Description>{faLang.main.description}</Description>
        </Header>
        <LoginForm onSubmit={handleSubmit(onLoginSubmit)}>
          <TextField
            type="text"
            label={faLang.username}
            formRef={register("username", { required: true })}
          />
          <TextField
            type="password"
            label={faLang.password}
            formRef={register("password", { required: true })}
          />
          <Button label={faLang.login} isLoading={false} expanded />
        </LoginForm>
        <LoginOptions>
          <div className="signup">
            <div className="question">{faLang.signup.question}</div>
            <div className="link">{faLang.signup.link}</div>
          </div>
          <div className="link">{faLang.forgot_password}</div>
        </LoginOptions>
      </RightWrapper>
    </Wrapper>
  );
}

export default Index;
