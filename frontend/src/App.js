import React from 'react';
import LoadAll from './Algorithm';
import Information from './Screen/information';
import TheameEdit from './Screen/editthemes/index';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useLocation,
  withRouter,
} from "react-router-dom";
import Home from './Screen/home'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/load" exact component={LoadAll}/>
        <Route path="/Discription" exact component={Information}/>
        <Route path="/Dashboard" exact component={TheameEdit}/>
      </Switch>
    </BrowserRouter>
  );
}



export default App;
