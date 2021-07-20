import { Switch, Route, useRouteMatch } from 'react-router-dom';

import DashboardContainer from '../../containers/dashboard';

import Toolbar from '../../organisms/toolbar';
import RightSidebar from '../../organisms/right-sidebar';
import Footer from '../../atoms/footer';

import { Wrapper } from './styles';

function Index() {
  const { path } = useRouteMatch();
  return (
    <Wrapper>
      <Toolbar className="toolbar" />
      <RightSidebar />

      <div>
        <Switch>
          <Route path={`${path}/content`}>content</Route>
          <Route path={`${path}/assignment`}>assignment</Route>
          <Route path={`${path}/project`}>project</Route>
          <Route path={`${path}/quiz`}>quiz</Route>
          <Route path={`${path}/grades`}>grades</Route>
          <Route path={`${path}/dashboard`} component={DashboardContainer} />
          <Route>404</Route>
        </Switch>
      </div>

      <div>leftside</div>
      <Footer className="footer" />
    </Wrapper>
  );
}

export default Index;
