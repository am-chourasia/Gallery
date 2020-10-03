import React from 'react';
import Main from './components/main/Main';
import Admin from './components/admin/Admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/admin" exact component={Admin} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
  );
}

export default App;