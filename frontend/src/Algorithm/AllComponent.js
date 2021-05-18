import React,{useState,useEffect} from 'react'
import Htag from '../component/Text/TextManger';
import CarouselSlide from '../component/Slider/carousel'
import Navbar from '../component/Navbar/navbar';
import Youtube,{YoutubeFlex} from '../component/Moving/youtube';
import ImageFlex from '../component/Moving/image';
import axios from 'axios';
import jwt from 'jwt-simple';
import uuid from 'react-uuid';

var demodata=[
    {
      id:uuid(),
      name:"Htag",
      type:"TextTag",
      styles:[{color:"black",backgroundcolor:"white",textalign:"",fontsize:"",padding:{top:0,bottom:0,left:0,rigth:0},margin:{top:0,bottom:0,left:0,rigth:0}}],
      data:[{h1:"Hello World!"}]
    },
    {
        id:uuid(),
        name:"CarouselSlide",
        type:"Slider",
        styles:[{color:"black",fontsize:20,height:40,padding:{top:0,bottom:0,left:0,rigth:0},margin:{top:0,bottom:0,left:0,rigth:0}}],
        data:[ {
          image:"https://images.unsplash.com/photo-1609953398453-c3fc0a7be8e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
          title:"Hello world",
          subtitle:"subtitle"
        }]
      },
      {
        id:uuid(),
        name:"Navbar",
        type:"Nav",
        styles:[{width:100,height:130,color:"white",backgroundcolor:"black"}],
        data:[{
          image:"https://images.unsplash.com/photo-1614788679832-7879205af178?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80",
          title:"Hello World",
          center:true
        }]
      },
      {
        id:uuid(),
        name:"Youtube",
        type:"Video",
        styles:[{width:1000,height:500}],
        data:[{
          link:"https://www.youtube.com/embed/eWNNjIIq4TA",
        }]
      },
      {
        id:uuid(),
        name:"YoutubeFlex",
        type:"Video",
        styles:[{width:300,height:300}],
        data:[{
          link:"https://www.youtube.com/embed/eWNNjIIq4TA",
          title:"Title",
          p:"Content"
        }]
      },
      {
        id:uuid(),
        name:"ImageFlex",
        type:"Image",
        styles:[{width:300,height:300}],
        data:[{
          image:"https://images.unsplash.com/photo-1614788679832-7879205af178?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80",
          title:"Title",
          p:"Content"
        }]
      },
    ]


export default function AllComponent() {

    const [Data,setData]=useState(demodata)
    const [message, setmessage] = useState("")  
    const e=React.createElement
    const component={"Htag":Htag,"CarouselSlide":CarouselSlide,"Navbar":Navbar,"Youtube":Youtube,"YoutubeFlex":YoutubeFlex,"ImageFlex":ImageFlex}
    

    function addCompoenet(e)
    {

    axios.post('/api/access/addcomponent',{id:jwt.decode(localStorage.getItem('UserLogin'),"WEB_X").id,data:JSON.stringify(Data[e])})
      .then((res)=>{
          alert(res.data.message)
      })
  
    }

    return (
        <div>
            {
                Data.map((Data,index)=>
                <div key={index}>
                   {      
                    e(
                      component[Data.name],
                      { styles: Data.styles, key: index, data: Data.data },
                    )
                  }
                  <div style={{display:'flex',justifyContent:'center',padding:10,borderTop:"2px solid lightblue"}}>
                      <button style={{alignItems:'center',backgroundColor:'#00a2ff',color:'white'}} className="btn"
                      onClick={()=>{addCompoenet(index)}}
                      >
                       Add Component
                      </button>
                    </div>
           </div>
       )
            }
            
        </div>
    )
}
