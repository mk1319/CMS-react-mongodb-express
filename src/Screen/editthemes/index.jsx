import React,{useState,useEffect} from "react";
import LoadAll,{Load} from './loadall';
import styled from "styled-components";
import Htag from '../../component/Text/TextManger';
import ReactHtmlParser from 'react-html-parser';
import CarouselSlide from '../../component/Slider/carousel';
import Navbar from '../../component/Navbar/navbar';

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
  name:"Htag",
  type:"TextTag",
  styles:[{customstyle:'margin:10px;',fontsize:20}],
  data:[{text:"Hello World"}]
},
{
  id:"2",
  name:"Htag",
  type:"TextTag",
  styles:[{margin:{top:10,right:10,bottom:10,left:0},color:"#e66465",textalign:"left",fontsize:10,backgroundcolor:"#e66465"}],
  data:[{text:"Hello World 2"}]
},
{
  id:"3",
  name:"Navbar",
  type:"Navbar",
  styles:[{width:100,height:130,color:"#e66465",backgroundcolor:"black"}],
  data:[{
    img:"https://images.unsplash.com/photo-1614788679832-7879205af178?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80",
    Text:"Hello World",
    center:false
  }]
}
]

export default function TheameEdit() {

  const [Id, setId] = useState("");
  const[update,setupdate]=useState(false)
  const [Data,setData]=useState(demodata)
  



  const setid=(id)=>{
    setId(id)
  }

  

    

  function handleupdate(){
    
    //setData(demodata)
    
    setupdate(()=>!update)


  }

  const e=React.createElement
  const component={"Htag":Htag,"CarouselSlide":CarouselSlide,"Navbar":Navbar}
  

  return (  
    <Container>
      <div className="header">
        <h1>Top Header</h1>
        <h1>Top Header</h1>
      </div>
      <div className="maincontainer">
          <div className="sidenavbar">
               <Load id={Id} demodata={Data} handleupdate={handleupdate} />    
          </div>
          <div className="main">
              {/* <LoadAll setid={setid} demodata={demodata}/> */}

            {
            
              Data.map((Data,index)=>
                      <div onClick={()=>{setid(Data.id)}} key={index}>
                         {
                          // <Htag styles={Data.styles} data={Data.data} />           
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
