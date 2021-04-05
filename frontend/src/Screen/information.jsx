import React,{useState} from "react";
import styled from "styled-components";
import { Form } from "../Style/index";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

export default function Information() {

  const [Info, setInfo] = useState({name:""});

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit=()=>{
    console.log(Info)
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
              <button onClick={()=>{handleSubmit()}}>Next</button>
            </div>
          </form>
        </Form>
      </div>
    </Container>
  );
}
