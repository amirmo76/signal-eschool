import { BrowserRouter, Switch, Route } from 'react-router-dom';
import dayjs from 'dayjs';
import jalaliday from 'jalaliday';

import HomepageContainer from './components/containers/index';
import PanelContainer from './components/containers/panel';

function App() {
  dayjs.extend(jalaliday);
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
