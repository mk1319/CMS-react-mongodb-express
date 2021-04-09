import React,{useState,useEffect} from 'react'
import Htag from '../component/Text/TextManger';
import ReactHtmlParser from 'react-html-parser'
import CarouselSlide from '../component/Slider/carousel'
import Navbar from '../component/Navbar/navbar';
import axios from 'axios';
import ReactLoading from 'react-loading';



export default function AllComponent() {

    const [Data,setData]=useState([])
      
    const e=React.createElement
    const component={"Htag":Htag,"CarouselSlide":CarouselSlide,"Navbar":Navbar}
    
    useEffect(() => {
      axios.post('http://localhost:5000/access/DisplayApp',{id:jwt.decode(localStorage.getItem('UserLogin'),"WEB_X").id})
      .then((res)=>{})
     
      return () => {};
    }, [])
  
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
           </div>
       )
            }
            
        </div>
    )
}
