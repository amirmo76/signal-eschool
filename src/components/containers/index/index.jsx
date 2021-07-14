// ndoe_modules
import {
  BrowserRouter,
  Route,
  Switch,
  useRouteMatch,
  Link,
} from "react-router-dom";
// Components
import HeadingOne from "../../atoms/heading-1";
import LoginForm from "../../organisms/login-form";
import SignupForm from "../../organisms/signup-form";
// Statics
import faLang from "../../../statics/values/langs/fa.json";
import { ReactComponent as HeroSVG } from "../../../statics/svgs/hero.svg";
import { ReactComponent as Circle } from "../../../statics/svgs/main-circle.svg";
// Styles
import { Header, Description, RightWrapper, Wrapper, Options } from "./styles";

function Index() {
  let { path, url } = useRouteMatch();

  return (
    <Wrapper>
      <HeroSVG className="hero" />
      <Circle className="circle" />
      <RightWrapper>
        <BrowserRouter>
          <Switch>
            <Route path={`${path}signup`} exact>
              <Header>
                <HeadingOne>{faLang.signup.title}</HeadingOne>
              </Header>
              <SignupForm className="signup_form" />
              <Options>
                <div className="signup">
                  <div className="question">{faLang.login.question}</div>
                  <Link className="link" to={`${url}`}>
                    {faLang.login.link}
                  </Link>
                </div>
              </Options>
            </Route>
            <Route exact path={path}>
              <Header>
                <HeadingOne>{faLang.main.title}</HeadingOne>
                <Description>{faLang.main.description}</Description>
              </Header>
              <LoginForm />
              <Options>
                <div className="signup">
                  <div className="question">{faLang.signup.question}</div>
                  <Link className="link" to={`${url}signup`}>
                    {faLang.signup.link}
                  </Link>
                </div>
                <div className="link">{faLang.forgot_password}</div>
              </Options>
            </Route>
            <Route>
              <HeadingOne>{faLang.not_found}</HeadingOne>
            </Route>
          </Switch>
        </BrowserRouter>
      </RightWrapper>
    </Wrapper>
  );
}

export default Index;
