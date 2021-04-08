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
import Home from './Screen/home';
import jwt from 'jwt-simple';


const checktoken=()=>{
  if(localStorage.getItem("UserLogin")){
        return true
    }
  return false
}

const autent={
    isLogin:checktoken(),
  
    authenticate(cb)
    {
        this.isLogin=true
        setTimeout(cb,100)
    },
    singout(cb)
    {
      this.isLogin=false
      localStorage.clear()
      setTimeout(cb,100)
    }
}

const ProtectedRouter=({component:Component,...rest})=>(
  <Route {...rest} render={(props)=>(
    autent.isLogin===true?<Component  {...props}/>:<Redirect to="/" />
  )}/>)
   

const Notfound=()=>{
  return(
    <h1>404 NOT FOUND.</h1>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/web/:name" exact component={LoadAll}/>
        <ProtectedRouter path="/Discription" exact component={Information}/>
        <ProtectedRouter path="/Dashboard" exact component={TheameEdit}/>
        <Route  component={Notfound}/>
      </Switch>
    </BrowserRouter>
  );
}



export default App;
export {autent};
