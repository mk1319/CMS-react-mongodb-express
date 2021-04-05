import React,{useState} from 'react'
import Htag from '../component/Text/TextManger';
import ReactHtmlParser from 'react-html-parser'
import CarouselSlide from '../component/Slider/carousel'
import Navbar from '../component/Navbar/navbar';






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
    

function LoadAll() {

  const [Data,setData]=useState(demodata)
    
  const e=React.createElement
  const component={"Htag":Htag,"CarouselSlide":CarouselSlide,"Navbar":Navbar}
  

  
    return (
      <>
        {
              Data.map((Data,index)=>
                      <div key={index}>
                         {      
                          e(
                            component[Data.name],
                            { styles: Data.styles, key: index, data: Data.data },
                          )
                        }

                 </div>
             )
            }
      </>
    )
}



export default LoadAll;