import React from 'react';
import './App.css';
import Nav from './Nav';
import Login from './Login';
import Home from './Home';
import GameDetailPage from './GameDetailPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/gamedetailpage/:id" name="gamedetailpage" component={GameDetailPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
