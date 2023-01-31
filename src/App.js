import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Charts from './components/Charts/Charts.js';
import TableComp from './components/TableComp/TableComp.js';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">
          <Button variant="contained">Table</Button>
        </Link>
        <Link to="/charts">
          <Button variant="contained">Chart</Button>
        </Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Libary</h1>
          <TableComp />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <Charts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
