import {
  useHistory,
  Link,
  BrowserRouter,
  useRouteMatch,
  useLocation,
} from "react-router-dom";

import Card from "../../atoms/card";

import dummyData from "./dummy.data.json";
import items from "./items";
import faLang from "../../../statics/values/langs/fa.json";

import {
  Wrapper,
  ProfileWrapper,
  Fullname,
  ClassroomCode,
  Navigation,
  NavigationItem,
} from "./right-sidebar.styles";

function RightSidebar() {
  const { url } = useRouteMatch();
  const location = useLocation();
  return (
    <Wrapper>
      <ProfileWrapper>
        <Card>
          <Fullname>{dummyData.user.name}</Fullname>
          <ClassroomCode>{`${faLang.class_code} ${dummyData.user.class.id}`}</ClassroomCode>
        </Card>
      </ProfileWrapper>
      <Navigation>
        {items.map((cur) => (
          <Link to={`${url}/${cur.pathname}`} key={cur.id}>
            <NavigationItem
              active={location.pathname === `${url}/${cur.pathname}`}
            >
              <cur.Icon className="icon" />
              <span className="title">{cur.title}</span>
            </NavigationItem>
          </Link>
        ))}
      </Navigation>
    </Wrapper>
  );
}

export default RightSidebar;
