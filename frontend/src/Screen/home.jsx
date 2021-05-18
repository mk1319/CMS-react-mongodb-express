import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {Form} from '../Style/index';
import axios from 'axios';
import jwt from "jwt-simple";
import {autent} from '../App'

const Container = styled.div`
  div.text {
    margin: 15px;
    text-align: center;
  }

  div.logincontainer {
    display: flex;
    justify-content: center;

    .loginheader {
      display: flex;
      justify-content: center;
      width: 40%;
      p {
        margin: 10%;
        margin-bottom: 0px;
        font-size: 30px;
        color: #222121;
      }
    }
  }
  .loginbody {
    display: flex;
    justify-content: center;
  }
`;

export default function Home() {
  const [visible, setvisible] = useState(true);

  const [values, setValues] = useState({
    email: "",
    name:"",
    password: "",
    discription:"",
    msg: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(visible)
    {
      axios.post('/api/access/login',{
        email:values.email,
        password:values.password
      })
      .then((res)=>{

        if(res.data.result)
        {
          localStorage.clear();
          
          setValues((preState)=>({...preState,msg:res.data.message,email:"",password:""}))

          localStorage.setItem(
            "UserLogin",
            jwt.encode(res.data,"WEB_X")
          );
          
          autent.authenticate();
            
            if(res.data.createdweb)
            {
              window.location.href="/Dashboard"
            }
            else{
              window.location.href="/Discription"
            }
          
          
        }
        else{

          setValues((preState)=>({...preState,msg:res.data.message}))

        }


      })
    }
    else
    {
      axios.post('/api/access/register',{
        email:values.email,
        name:values.name,
        discription:values.discription
      })
      .then((res)=>{

        if(res.data.result)
        {
          localStorage.clear();
          
          setValues((preState)=>({...preState,msg:res.data.message,email:"",name:"",discription:""}))

          setTimeout(()=>{
            window.location.href="/"
          },300)  

        }
        else{
          setValues((preState)=>({...preState,msg:res.data.message}))

        }
      })
    }
  };

  return (
    <Container>
      <div className="text">
        <h2>Want To Build Your own Website Free of cost with free Hosting?</h2>
        <p>Hury Up! and Sign In!!</p>
      </div>

      <div className="container">
        <div className="logincontainer">
          <div className="loginheader">
            <p>{visible ? "Login" : "Register"}</p>
          </div>
        </div>
        <div className="loginbody">
              <Form className="loginbodyform">
            <form
              autoComplete="off"
              className="form"
              onSubmit={(e) => handleSubmit(e)}
            >
              <h4 style={{ color: "#d60b0b" }}>{values.msg}</h4>
              
              {!visible?<input
                required
                type="name"
                value={values.name}
                placeholder="Name"
                name="name"
                onChange={(e) => handleChange(e)}
              />:<></>}

              <input
                required
                type="email"
                value={values.email}
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              {visible?<input
                required
                type="password"
                value={values.password}
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
              />:<></>}

            {!visible?<textarea
                required
                type="text"
                min="10"
                value={values.discription}
                placeholder="Website discription"
                name="discription"
                onChange={(e) => handleChange(e)}
              />:<></>}


              {/* <p className="forgot-password">Forgot Password?</p> */}
              <div className="action-group">
                <button>LOGIN</button>
                <p>
                  Don't have an account? <span onClick={()=>setvisible(!visible)}>Register</span>
                </p>
              </div>
            </form>
          </Form>
          </div>
      </div>
    </Container>
  );
}
