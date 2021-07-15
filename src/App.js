import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomepageContainer from "./components/containers/index";
import PanelContainer from "./components/containers/panel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/panel">
            <PanelContainer />
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
