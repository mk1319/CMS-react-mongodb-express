import React,{useState,useEffect} from 'react'
import Htag from '../component/Text/TextManger';
import ReactHtmlParser from 'react-html-parser'
import CarouselSlide from '../component/Slider/carousel'
import Navbar from '../component/Navbar/navbar';
import axios from 'axios';




function LoadAll(props) {

  const [Data,setData]=useState([])
  const [loading, setloading] = useState(false)
    
  const e=React.createElement
  const component={"Htag":Htag,"CarouselSlide":CarouselSlide,"Navbar":Navbar}
  
  useEffect(() => {
    
    axios.post('http://localhost:5000/access/DisplayApp',{name:props.match.params.name})
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
        }
        else
        {
        }
      }
    })
   
    return () => {
    };
  }, [])

  
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