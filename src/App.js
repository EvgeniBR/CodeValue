import { Route, Switch } from 'react-router';
import HomePage from './pages/HomePage/HomePage.component';

import './App.scss'

function App() {
  return (
    <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
  );
}

export default App;
