import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      Navbar
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <div>Home</div>
          </Route>
          <Route path="/panel" exact>
            <div>Panel</div>
          </Route>
          <Route path="/panel/dashboard" exact>
            <div>Dashboard</div>
          </Route>
          <Route>
            <div>404</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
