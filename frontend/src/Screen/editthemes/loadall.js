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
    else
    {
      setsty((prev) => ({ ...prev, [id]: res }));
      Styles[0] = sty;
    }

    setTimeout(() => {
      handleupdate();
    }, 3000);
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
      // case "customstyle":
      //   return (
      //     <li>
      //       Custom-Style &nbsp;
      //       <br />
      //       <textarea
      //         value={sty[s]}
      //         min="10"
      //         onChange={(e) => {
      //           hadlechange("customstyle", e.target.value);
      //         }}
      //       />
      //     </li>
      //   );
      default:
        return "";
    }

  };

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
      </form>
    </>
  );
};

export const Load = ({ id, demodata, handleupdate }) => {

  const [Styles, setStyle] = useState({});
  const [Id, setId] = useState(id);
  const[layout,Setlayout]=useState(true) 

  useEffect(() => {
    if (Id != "") {
      setStyle(() => {
        let data = demodata.filter((data) => data.id == Id);
        return data[0];
      });
    }
  }, [Id]);

  const Taglist = () => {
    return (
      <ul className="list-group">
        {
        layout?
        
        Array.isArray(demodata) && demodata.length ? (
          demodata.map((Data, index) => (
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
          ))
        ) : (
          <></>
        )
      :
       <> 
        <i className="fa fa-arrow-left" style={{color:"gray",fontSize:"20px"}} onClick={()=>{Setlayout(!layout)}}></i>
        <ShowInputFiled Styles={Styles.styles} handleupdate={handleupdate} />
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
