import React from 'react'
import {c} from '../component/Text/TextManger';
import ReactHtmlParser from 'react-html-parser'
import CarouselSlide from '../component/Slider/carousel'
import Navbar from '../component/Navbar/navbar';







function LoadAll() {

    const demodata=[{
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
        styles:[{padding:{top:10,right:100,bottom:100,left:0},color:"blue",textalign:"center"}],
        data:[{text:"Hello World"}]
    }]
    

    
    const e=React.createElement
    const component={...c}
    
    const Load=()=>{
        return (
                Array.isArray(demodata)&&demodata.length? demodata.map((Data,index)=>{
                    return e(component[Data.name],{styles:Data.styles,key: index,data:Data.data})
                }):<></>
        )
    }

    return (
        <>
             <Navbar/>
             <CarouselSlide/>
             <Load/>
             {ReactHtmlParser('<p className="a">Hellllo</p><p>asdd</p>')}
        </>
    )
}



export default LoadAll;