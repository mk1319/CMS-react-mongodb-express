import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { Form } from "../Style/index";
import jwt from 'jwt-simple';
import axios from "axios";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

export default function Information() {

  const [Info, setInfo] = useState({name:""});
  const [status, setstatus] = useState(false)
  const [id,setid]=useState('')
  useEffect(()=>{
    setid(
      jwt.decode(localStorage.getItem('UserLogin'),"WEB_X").id
    )
  },[])


  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if(value=="" || value.length<3)
    {
      setstatus(false)
      return false
    }

    axios.get(`http://localhost:5000/access/check/${value}`)
    .then((res)=>{
      if(res.data.result)
      {
        setstatus(true)
        setInfo((preState)=>({...preState,message:res.data.message}))
        setTimeout(()=>{
          setInfo((preState)=>({...preState,message:""}))
        },3000)
      }
      else
      {
        setstatus(false)
        setInfo((preState)=>({...preState,message:res.data.message}))
        setTimeout(()=>{
          setInfo((preState)=>({...preState,message:""}))
        },3000)
      }
    })
  }

  const handleSubmit=()=>{

    if(status && Info.name.length >3)
    {
      axios.post('http://localhost:5000/access/registerwebname',{
        name:Info.name,
        id:id
      })
      .then((res)=>{

        if(res.data.result)
        {
          setInfo((preState)=>({...preState,message:res.data.message}))
          setTimeout((res)=>{
                window.location.href="http://localhost:3000/Dashboard"
          })
        }

      })
    }
    else
    {
        setInfo((preState)=>({...preState,message:"Enter Valid Domain!"}))
        setTimeout(()=>{
          setInfo((preState)=>({...preState,message:""}))
        },2000)
    }
  }


  return (
    <Container>
      <div>
        <p>
          Register your domain:- <p style={{color:'blue'}}>http://localhost:3000/{"{YOUR_DOMAIN_HERE}"}</p>
        </p>
        <Form>
          <form autoComplete="off" className="form" onSubmit={(e)=>{e.preventDefault()}}>
            <input
              required
              type="name"
              placeholder="name"
              name="name"
              value={Info.name}
              onChange={(e) => handleChange(e)}
            />
            <div className="action-group">
              <p style={{color:'red',textAlign:'center'}}>{Info.message}</p>
              <button onClick={()=>{handleSubmit()}}>{status?"Get Name":"Chack Availability"}</button>
            </div>
          </form>
        </Form>
      </div>
    </Container>
  );
}
