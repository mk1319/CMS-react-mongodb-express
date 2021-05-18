import React,{useState,useEffect} from "react";
import LoadAll,{Load} from './loadall';
import styled from "styled-components";
import {autent} from '../../App';
import Htag from '../../component/Text/TextManger';
import Youtube,{YoutubeFlex} from '../../component/Moving/youtube'
import ImageFlex from '../../component/Moving/image';
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



export default function TheameEdit() {

  

  const [Id, setId] = useState("");
  const [userid,setuserid]=useState("")
  const[update,setupdate]=useState(false)
  const [Data,setData]=useState([])
  const [message, setmessage] = useState("")
  const [loadfinish, setloadfinish] = useState(false)
  const [WebName, setWebName] = useState("")
  
  const setid=(id)=>{
    setId(id)
  }

  useEffect(()=>{

    setuserid(
      jwt.decode(localStorage.getItem('UserLogin'),"WEB_X").id
    )

    axios.get(`/api/access/getnameofpage/${jwt.decode(localStorage.getItem('UserLogin'),"WEB_X").id}`)
    .then((r)=>{
        setWebName(r.data)
    })


  if(!loadfinish)
  {
    
    axios.post('/api/access/dashboardweb',{id:jwt.decode(localStorage.getItem('UserLogin'),"WEB_X").id})
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
      setData([])
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
      .post("/api/access/Updateapp", {
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
  const component={"Htag":Htag,"CarouselSlide":CarouselSlide,"Navbar":Navbar,"Youtube":Youtube,"YoutubeFlex":YoutubeFlex,"ImageFlex":ImageFlex}

  

  return (  
    <Container>
      <div className="header">

        <div>
          <h3>Webex</h3>
        </div>
        <div>
          <button onClick={()=>window.location.href="/AllComponent"}>Add Component</button>
        </div>
        <div>
          <label style={{color:'red'}}>{message}</label>
          <button onClick={()=>{window.location=`/web/${WebName}`}}>View Website</button>
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
                window.location.href="/"
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
            {!Data.length&&<h3 className="text-center">Page Has No Data Add Component</h3>}
          </div>
      </div>
    </Container>
  );
}
