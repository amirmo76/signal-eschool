import { Switch, BrowserRouter, Route, useRouteMatch } from "react-router-dom";
import Toolbar from "../../organisms/toolbar";

function Index() {
  const { path } = useRouteMatch();
  return (
    <div>
      <Toolbar />
      <div>rightside</div>

      <BrowserRouter>
        <Switch>
          <Route path={`${path}/content`}>content</Route>
          <Route path={`${path}/assignment`}>assignment</Route>
          <Route path={`${path}/project`}>project</Route>
          <Route path={`${path}/quiz`}>quiz</Route>
          <Route path={`${path}/grades`}>grades</Route>
          <Route path={path}>dashboard</Route>
        </Switch>
      </BrowserRouter>

      <div>leftside</div>
      <div>footer</div>
    </div>
  );
}

export default Index;
