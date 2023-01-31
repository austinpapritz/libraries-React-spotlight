import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Charts from './services/components/Charts/Charts.js';
import Table from './services/components/TableComp/TableComp.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table" component={Table}>
          <h1>Table Libary</h1>
        </Route>
        <Route path="/charts" component={Charts}>
          <h1>Chart Library</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
