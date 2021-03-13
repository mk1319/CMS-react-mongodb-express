import React,{useState,useEffect} from 'react';
import Htag from '../../component/Text/TextManger';
import ReactHtmlParser from 'react-html-parser';
import CarouselSlide from '../../component/Slider/carousel';
import Navbar from '../../component/Navbar/navbar';









const ShowInputFiled=({Styles,handleupdate})=>{
  
    const[sty,setsty]=useState(Styles!=undefined?Styles[0]:{})
    const [State, setState] = useState(false)
    const[Value,setValue]=useState("")
   

    


    const hadlechange=(id,res,e)=>{
      
        setsty((prev)=>({...prev,color:res}));
        Styles[0]=sty

        

        setTimeout(()=>{
            handleupdate()
        },3000) 
    }



  const Addfiled=(s,index)=>{

    switch (s) {
      case "color":  
        return (
          <li key={index}>
            Color:&nbsp;
            <input
              type="color"
              value={sty[s]}
              onChange={(e) => {
                hadlechange("color", e.target.value,e);
              }}

            />
          </li>
        );
      default:
        return "";
    }
  }

  return(
    <>
      <form>
        {Object.keys(sty).map((data,index)=>Addfiled(data,index))} 
      </form>
    </>
  )
}

export const Load = ({ id ,demodata,handleupdate}) => {

  const [Styles, setStyle] = useState({});
  const [Id, setId] = useState(id)

useEffect(() => {
    if(Id!='')
    {
        setStyle(()=>{
             let data=demodata.filter((data) => data.id == Id)
            return data[0]
            })
    }
    

}, [Id])




  const Taglist = () => {
    return (
      <ul className="list-group">
        {Array.isArray(demodata) && demodata.length ? (
          demodata.map((Data, index) => (
            <li className="list-group-item"
            onClick={()=>{
                setId(Data.id)
            }}
            key={index}
            >
              {Data.type} {Data.name}
            </li>
          ))
        ) : (
          <></>
        )
        }
        <ShowInputFiled Styles={Styles.styles} handleupdate={handleupdate}/>
      </ul>
    );
  };


  return(
    <>
        <Taglist/>
    </>
  );
};

function LoadAll({setid,demodata}) {


    const e=React.createElement
    const component=Htag
    

    
      

    return (
        <>
             {/* <Navbar/>
             <CarouselSlide/> */}
            {
                 Array.isArray(demodata)&&demodata.length? demodata.map((Data,index)=>
                            
                         <div onClick={()=>{setid(Data.id)}} key={index}>
                            {console.log(demodata),
                            e(
                            component[Data.name],
                             { styles: Data.styles, key: index, data: Data.data },
                            )
            }
                         </div>
                ):<></>
            }
        </>
    )
}





export default LoadAll;