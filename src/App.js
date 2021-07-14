import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomepageContainer from "./components/containers/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/panel" exact>
            <div>Panel</div>
          </Route>
          <Route path="/panel/dashboard" exact>
            <div>Dashboard</div>
          </Route>
          <Route path="/">
            <HomepageContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
