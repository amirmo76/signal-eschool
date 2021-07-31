import { Switch, Route, useRouteMatch } from 'react-router-dom';

import DashboardContainer from '../../containers/dashboard';
import ContentnsContainer from '../../containers/contents';
import AssignmentsContainer from '../../containers/assignments';
import AssignmentContainer from '../../containers/assignment';
import ProjectsContainer from '../../containers/projects';
import QuizesContainer from '../../containers/quizes';

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
          <Route path={`${path}/content`} component={ContentnsContainer} />
          <Route
            path={`${path}/assignment/:id`}
            component={AssignmentContainer}
          />
          <Route path={`${path}/assignment`} component={AssignmentsContainer} />
          <Route path={`${path}/project`} component={ProjectsContainer} />
          <Route path={`${path}/quiz`} component={QuizesContainer} />
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
