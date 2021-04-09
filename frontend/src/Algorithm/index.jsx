import React,{useState,useEffect} from 'react'
import Htag from '../component/Text/TextManger';
import ReactHtmlParser from 'react-html-parser'
import CarouselSlide from '../component/Slider/carousel'
import Navbar from '../component/Navbar/navbar';
import axios from 'axios';
import ReactLoading from 'react-loading';




function LoadAll(props) {

  const [Data,setData]=useState([])
  const [loading, setloading] = useState(true)
    
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
         setloading(false)
        }
        else
        {
        }
      }})
   
    return () => {
    };
  }, [])


    return (
      <div>
        {!loading?
              Data.map((Data,index)=>
                      <div key={index}>
                         {      
                          e(
                            component[Data.name],
                            { styles: Data.styles, key: index, data: Data.data },
                          )
                        }
                 </div>
             ):<div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <ReactLoading type="bars" color="#41bfdf" height={'10%'} width={'10%'}/>
               </div>
            }
            {!Data.length&!loading?<h1>Page Has No Data!</h1>:""}
      </div>
    )
}



export default LoadAll;