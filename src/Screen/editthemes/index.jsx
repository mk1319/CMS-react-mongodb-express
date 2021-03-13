import React,{useState,useEffect} from "react";
import LoadAll,{Load} from './loadall';
import styled from "styled-components";


export const Container = styled.div`
    height:100vh;
    .header{
        position:relative;
        display:flex;
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
`;

var demodata=[{
  id:"1",
  name:"Ptag",
  type:"TextTag",
  styles:[{customstyle:'margin:100px;',fontsize:"20"}],
  data:[{text:"Hello World"}]
},
{
  id:"2",
  name:"Htag",
  type:"TextTag",
  styles:[{padding:{top:10,right:100,bottom:100,left:0},color:"#e66465",textalign:"center"}],
  data:[{text:"Hello World 2"}]
}]

export default function TheameEdit() {

  const [Id, setId] = useState("");
  const[update,setupdate]=useState(false)


  const setid=(id)=>{
    setId(id)
  }

  useEffect(() => {
    return () => {
      
    };
  }, [update])

  function handleupdate(){
    setupdate(()=>!update)
    console.log("update",demodata)
  }

  return (
    <Container>
      <div className="header">
        <h1>Top Header</h1>
        <h1>Top Header</h1>
      </div>
      <div className="maincontainer">
          <div className="sidenavbar">
               <Load id={Id} demodata={demodata} handleupdate={handleupdate}/>    
          </div>
          <div className="main">
              <LoadAll setid={setid} demodata={demodata}/>
          </div>
      </div>
    </Container>
  );
}
