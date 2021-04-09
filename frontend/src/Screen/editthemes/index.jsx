import React,{useState,useEffect} from "react";
import LoadAll,{Load} from './loadall';
import styled from "styled-components";
import {autent} from '../../App';
import Htag from '../../component/Text/TextManger';
import ReactHtmlParser from 'react-html-parser';
import CarouselSlide from '../../component/Slider/carousel';
import Navbar from '../../component/Navbar/navbar';
import jwt from 'jwt-simple';
import axios from 'axios';

export const Container = styled.div`
    height:100vh;
    .header{
        position:relative;
        display:flex;
        justify-content:space-between;
        padding:20px;
        height:10vh;
    }
    .maincontainer{
        display:flex;
        height:90vh;
        border:1px solid black;
    }
    .sidenavbar{
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            border:1px solid blue;
            width:20%;
            overflow:hidden;
            overflow-y:scroll;
            scroll-behavior:smooth;
    }
    .main{
            display:flex;
            flex-direction:column;
            border:1px solid blue;
            width:80%;
            overflow:hidden;
            overflow-y:scroll;
            scroll-behavior:smooth;
    }
    li{
      border:1px solid #1b1c1d;
      background-color:#ebeff0;
      margin:2px;
    }
    li:hover{

        background-color:#ccd2d3;
    }
`;

var demodata=[
{
  id:"1",
  name:"Htag",
  type:"TextTag",
  styles:[{customstyle:'margin:10px;',fontsize:20}],
  data:[{text:"Hello World"}]
}
]

export default function TheameEdit() {

  

  const [Id, setId] = useState("");
  const [userid,setuserid]=useState("")
  const[update,setupdate]=useState(false)
  const [Data,setData]=useState(demodata)
  const [message, setmessage] = useState("")
  const [loadfinish, setloadfinish] = useState(false)
  
  const setid=(id)=>{
    setId(id)
  }

  useEffect(()=>{

    setuserid(
      jwt.decode(localStorage.getItem('UserLogin'),"WEB_X").id
    )

  if(!loadfinish)
  {
    
    axios.post('http://localhost:5000/access/dashboardweb',{id:jwt.decode(localStorage.getItem('UserLogin'),"WEB_X").id})
    .then((res)=>{
      if(res.data.result)
      {
        if(res.data.re)
        {
          let data=[]
          res.data.re.map((e)=>{
              data.push(JSON.parse(e))
          })
         setData(data)
         setloadfinish(false)
        }
      }})
    }

    if(!Data.length)
    {
      setData(demodata)
    }
  
  },[])



  function handleupdate(){    
    setupdate(()=>!update)
  }

  function UpdateWebApp()
  {
    let Datalist=[]
    
    Data.map((d) => {
      Datalist.push(JSON.stringify(d));
    });

    axios
      .post("http://localhost:5000/access/Updateapp", {
        id: userid,
        datalist: Datalist,
      })
      .then((res) => {
        setmessage(res.data.message);
        setTimeout(() => {
          setmessage("");
        }, 1000);
      });

  }

  const e=React.createElement
  const component={"Htag":Htag,"CarouselSlide":CarouselSlide,"Navbar":Navbar}
  

  return (  
    <Container>
      <div className="header">

        <div>
          <h3>WebName</h3>
        </div>
        <div>
          <button onClick={()=>window.location.href="http://localhost:3000/AllComponent"}>Add Component</button>
        </div>
        <div>
          <label style={{color:'red'}}>{message}</label>
          <button onClick={()=>{UpdateWebApp()}}>Save</button>
        </div>

      </div>
      <div className="maincontainer">
          <div className="sidenavbar">
              <div>
                <Load id={Id} demodata={Data} handleupdate={handleupdate} />
              </div>
              <li onClick={()=>{
                autent.singout()
                window.location.href="http://localhost:3000/"
              }}>Signout</li>
          </div>
          <div className="main">
            {
              Data.map((Data,index)=>
                      <div onClick={()=>{setid(Data.id)}} key={index}>
                         {        
                          e(
                            component[Data.name],
                            { styles: Data.styles, key: index, data: Data.data },
                          )
                        }
                 </div>
             )
            }
          </div>
      </div>
    </Container>
  );
}
