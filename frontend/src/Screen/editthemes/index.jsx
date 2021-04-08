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
  id:"3",
  name:"Navbar",
  type:"Navbar",
  styles:[{width:100,height:100,color:"#e66465",backgroundcolor:"black"}],
  data:[{
    img:"https://images.unsplash.com/photo-1614788679832-7879205af178?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80",
    Text:"Hello World",
    center:true
  }]
},
{
  id:"4",
  name:"CarouselSlide",
  type:"Slider",
  styles:[{width:100,height:50,color:"#e66465",fontsize:100}],
  data:[{
    img:"https://images.unsplash.com/photo-1614788679832-7879205af178?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80",
    title:"Hello world",
    subtitle:"subtitle",
  },]
},
{
  id:"1",
  name:"Htag",
  type:"TextTag",
  styles:[{customstyle:'margin:10px;',fontsize:20}],
  data:[{text:"Hello World"}]
},
{
  id:"2",
  name:"Htag",
  type:"TextTag",
  styles:[{margin:{top:10,right:10,bottom:10,left:0},color:"#070505",textalign:"left",fontsize:30,backgroundcolor:"#e66465"}],
  data:[{text:"Hello World 2"}]
},
]

export default function TheameEdit() {

  

  const [Id, setId] = useState("");
  const [userid,setuserid]=useState("")
  const[update,setupdate]=useState(false)
  const [Data,setData]=useState(demodata)
  
  const setid=(id)=>{
    setId(id)
  }

  useEffect(()=>{

    setuserid(
      jwt.decode(localStorage.getItem('UserLogin'),"WEB_X").id
    )
    Data.map((data)=>{
      //typeof JSON.stringify(data)
      //jwt.decode(localStorage.getItem('UserLogin'),"WEB_X").id
    })
  },[])



  function handleupdate(){    
    setupdate(()=>!update)
  }

  function UpdateWebApp()
  {
    let Datalist=[]
    
    Data.map((d)=>{
          Datalist.push(JSON.stringify(d))
    })
    
    axios.post('http://localhost:5000/access/Updateapp',{
      id:userid,
      datalist:Datalist
    })
    .then((res)=>{
        console.log(res.data)
    })

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
          <h5>Add More Component<button>Add</button></h5>
        </div>
        <div>
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
