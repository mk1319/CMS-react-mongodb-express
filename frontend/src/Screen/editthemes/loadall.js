import React, { useState, useEffect } from "react";
import Htag from "../../component/Text/TextManger";
import ReactHtmlParser from "react-html-parser";
import CarouselSlide from "../../component/Slider/carousel";
import Navbar from "../../component/Navbar/navbar";


const ShowInputFiled = ({ Styles, handleupdate }) => {

  const [sty, setsty] = useState(Styles != undefined ? Styles[0] : {});
  const [State, setState] = useState(false);
  const [Value, setValue] = useState("");


  const hadlechange = (id, res) => {

    
    if(id=="padding" || id=="margin")
    {
      setsty((prev) => ({ ...prev, [id]:{...sty[id],[res.name]:res.value} }));
      Styles[0] = sty;
    }
    else if(id=="end")
    {
      setsty(sty)
      Styles[0] = sty;
    }
    else
    {
      setsty((prev) => ({ ...prev, [id]: res }));
      Styles[0] = sty;
    }
  };

  const Addfiled = (s, index) => {

    switch (s) {
      case "color":
        return (
          <li key={index}>
            Color:&nbsp;
            <input
              type="color"
              value={sty[s]}
              onChange={(e) => {
                hadlechange("color", e.target.value);
              }}
            />
          </li>
        );
      case "backgroundcolor":
        return (
          <li key={index}>
            backgroundColor:&nbsp;
            <input
              type="color"
              value={sty[s]}
              onChange={(e) => {
                hadlechange("backgroundcolor", e.target.value);
              }}
            />
          </li>
        );
      case "fontsize":
        return (
          <li key={index}>
            fontsize:&nbsp;
            <input
              type="number"
              value={sty[s]}
              onChange={(e) => {
                hadlechange("fontsize", e.target.value);
              }}
            />
          </li>
        );
      case "textalign":
        return (
          <li key={index}>
            Alignment:&nbsp;
            <select
              value={sty[s]}
              onChange={(e) => {
                hadlechange("textalign", e.target.value);
              }}
            >
              {["center", "left", "right"].map((name) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))}
            </select>
          </li>
        );
      case "padding":
        return (
          <li key={index}>
            padding:&nbsp;
            <br />
            Top:&nbsp;
            <input
              type="number"
              value={sty[s].top}
              onChange={(e) => {
                hadlechange("padding", { name: "top", value: e.target.value });
              }}
            />
            <br />
            Right:&nbsp;
            <input
              type="number"
              value={sty[s].right}
              onChange={(e) => {
                hadlechange("padding", {
                  name: "right",
                  value: e.target.value,
                });
              }}
            />
            <br />
            Left:&nbsp;
            <input
              type="number"
              value={sty[s].left}
              onChange={(e) => {
                hadlechange("padding", { name: "left", value: e.target.value });
              }}
            />
            <br />
            Bottom:&nbsp;
            <input
              type="number"
              value={sty[s].bottom}
              onChange={(e) => {
                hadlechange("padding", {
                  name: "bottom",
                  value: e.target.value,
                });
              }}
            />
          </li>
        );
      case "margin":
        return (
          <li key={index}>
            Margin:&nbsp;
            <br />
            Top:&nbsp;
            <input
              type="number"
              value={sty[s].top}
              onChange={(e) => {
                hadlechange("margin", { name: "top", value: e.target.value });
              }}
            />
            <br />
            Right:&nbsp;
            <input
              type="number"
              value={sty[s].right}
              onChange={(e) => {
                hadlechange("margin", { name: "right", value: e.target.value });
              }}
            />
            <br />
            Left:&nbsp;
            <input
              type="number"
              value={sty[s].left}
              onChange={(e) => {
                hadlechange("margin", { name: "left", value: e.target.value });
              }}
            />
            <br />
            Bottom:&nbsp;
            <input
              type="number"
              value={sty[s].bottom}
              onChange={(e) => {
                hadlechange("margin", {
                  name: "bottom",
                  value: e.target.value,
                });
              }}
            />
          </li>
        );
      case "width":
        return (
          <li key={index}>
            width:&nbsp;
            <input
              type="number"
              value={sty[s]}
              onChange={(e) => {
                hadlechange("width", e.target.value);
              }}
            />
          </li>
        );
      case "height":
        return (
          <li key={index}>
            height:&nbsp;
            <input
              type="number"
              value={sty[s]}
              onChange={(e) => {
                hadlechange("height", e.target.value);
              }}
            />
          </li>
        );
      default:
        return "";
    }
  };
  
  function submit()
  {
    hadlechange("end","")     
    handleupdate()
  }

  
  return (
    <>
      <form>
        
        {Object.keys(sty).map((data, index) => Addfiled(data, index))}

        <li>
            Custom-Style &nbsp;
            <br />
            <textarea
              value={sty['customstyle']!=undefined?sty['customstyle']:""}
              min="10"
              onChange={(e) => {
                hadlechange("customstyle", e.target.value);
              }}
            />
          </li>
          <button style={{backgroundColor:'#db250d',margin:5,color:'white'}} onClick={()=>submit()}>Save Changes</button>
      </form>
    </>
  );
};



const ShowDataInputFiled = ({ Data, handleupdate }) => {

  const [data, setdata] = useState(Data != undefined ? Data[0] : {});
  


  const hadlechange = (id, res) => {

    if(id=="end")
    {
      setdata(data)
      Data[0] = data;
    }
    
      setdata((prev) => ({ ...prev, [id]: res }));
      Data[0] = data;
  
  };

  const Addfiled = (s, index) => {

    switch (s) {
      case "title":
        return (
          <li key={index}>
            Title:&nbsp;
            <input
              type="text"
              value={data[s]}
              onChange={(e) => {
                hadlechange("title", e.target.value);
              }}
            />
          </li>
        );
      case "subtitle":
        return (
          <li key={index}>
            Subtitle:&nbsp;
            <input
              type="text"
              value={data[s]}
              onChange={(e) => {
                hadlechange("subtitle", e.target.value);
              }}
            />
          </li>
        );
      case "h1":
        return (
          <li key={index}>
            Heading h1:&nbsp;
            <input
              type="text"
              value={data[s]}
              onChange={(e) => {
                hadlechange("h1", e.target.value);
              }}
            />
          </li>
        );
      case "p":
        return (
          <li key={index}>
            Text:&nbsp;
            <input
              type="text"
              value={data[s]}
              onChange={(e) => {
                hadlechange("p", e.target.value);
              }}
            />
          </li>
        );
      case "image":
        return (
          <li key={index}>
            Text:&nbsp;
            <input
              type="text"
              value={data[s]}
              onChange={(e) => {
                hadlechange("image", e.target.value);
              }}
            />
          </li>
        );
        case "link":
        return (
          <li key={index}>
            Link:&nbsp;
            <input
              type="text"
              value={data[s]}
              onChange={(e) => {
                hadlechange("link", e.target.value);
              }}
            />
          </li>
        );
      default:
        return "";
    }
  };
  
  function submit()
  {
    hadlechange("end",)     
    handleupdate()
  }

  
  return (
    <>
      <form>
        
        {Object.keys(data).map((data, index) => Addfiled(data, index))}

        <button style={{backgroundColor:'#db250d',margin:5,color:'white'}} onClick={()=>submit()}>Save Changes</button>
      </form>
    </>
  );
};

export const Load = ({ id, demodata, handleupdate }) => {

  const [RanderData, setRanderData] = useState({});
  const [Id, setId] = useState(id);
  const[layout,Setlayout]=useState(true)
  const [isstyle, setisstyle] = useState(false)
  const [isdata, setisdata] = useState(false)


  useEffect(() => {
    
    if (Id != "") {
      setRanderData(() => {
        let data = demodata.filter((data) => data.id == Id);
        return data[0];
      });
    }

  }, [Id]);

  const Taglist = () => {

    function drag(s,e){
      let d=demodata;
      [d[s],d[e]]=[d[e],d[s]];  

      handleupdate()
    }

    function deletecomponent(e)
    {
      
      let d=demodata;
        d.splice(e,1) 
      handleupdate()

    }

  


    return (
      <ul className="list-group">
        {
        layout?
        
        Array.isArray(demodata) && demodata.length ? (
          demodata.map((Data, index) => (
            <div>
            <li
              className="list-group-item"
              onClick={() => {
                setId(Data.id);
                Setlayout(!layout)
              }}
              key={index}
            >
              {Data.type} {Data.name}
            </li>
             {index!=0?<button onClick={()=>{
              drag(index,index-1)          
            }}>up</button>:""}
  
            {demodata.length-1!=index?<button onClick={()=>{
                drag(index,index+1)
            }}>Down</button>:""}

            <button onClick={()=>{
                deletecomponent(index)
            }}>Delete</button>
            </div>
          ))
        ) : (
          <></>
        )
      :
       <> 
        <i className="fa fa-arrow-left" style={{color:"gray",fontSize:"20px"}} onClick={()=>{Setlayout(!layout)}}></i>
        
        <li className="btn" onClick={()=>setisstyle(!isstyle)}>Edit Style</li>
        <div style={{display:!isstyle?"none":""}}>
          <ShowInputFiled Styles={RanderData.styles} handleupdate={handleupdate}/>
        </div>

        <li className="btn" onClick={()=>setisdata(!isdata)}>Edit Data</li>
        <div style={{display:!isdata?"none":""}}>
          <ShowDataInputFiled Data={RanderData.data} handleupdate={handleupdate}/>
        </div>
        
        </>
      }    
      </ul>
    );
  };
  return (
    <>
      <Taglist />
    </>
  );
};

function LoadAll({ setid, demodata }) {
  const e = React.createElement;
  const component = Htag;

  return (
    <>
      {Array.isArray(demodata) && demodata.length ? (
        demodata.map((Data, index) => (
          <div
            onClick={() => {
              setid(Data.id);
            }}
            key={index}
          >
            {
              (console.log(demodata),
              e(component[Data.name], {
                styles: Data.styles,
                key: index,
                data: Data.data,
              }))
            }
          </div>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

export default LoadAll;
