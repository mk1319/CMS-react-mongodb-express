import React,{useState,useEffect} from "react";
import styled from 'styled-components';

const Carousel=styled.div`
  height:${props=>props.Styles.height ||"90vh"};
  img{
    width:100%;
    height:${props=>props.Styles.height ||"90vh"};
  }
`


const Caption=styled.div`
  padding-bottom:40vh;
  h2{
    font-size:${props=>props.Styles.fontsize ||"100px"};
    color:${props=>props.Styles.color ||"black"};
  }
  p{
    font-size:${props=>props.Styles.fontsize ||"50px"};
    color:${props=>props.Styles.color ||"black"};
  }

`



const CarouselSlide = ({styles,data,controls}) => {

  const [Style,setStyle]=useState(styles==undefined?{height:"100vh"}:styles[0]);
  
  const [Data, setData] = useState(
    data == undefined
      ? [
          {
            img:"https://images.unsplash.com/photo-1609953398453-c3fc0a7be8e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
            title:"Hello world",
            subtitle:"subtitle"
          },
        ]
      : data
  );
  const [control, setcontrol] = useState(controls==undefined?{indicator:1,arrow:0}:controls)
  
  


  return (
      <Carousel
        Styles={Style}
        id="carouselslider"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        {control.indicator==1?<ol className="carousel-indicators">

        {
          Data.map((datas,index)=>
            <li
              data-bs-target="#carouselslider"
              data-bs-slide-to="0"
              className={`${index===0?"active":""}`}
              key={index}
            ></li>
          )
        }
      
        </ol>:<></>}
        
        <div className="carousel-inner">

          {Data.map((datas,index)=>
          

          <div className={`${index==0?"carousel-item active":"carousel-item"}`} key={index}>
            <img
              src={datas.img}
            />
            <Caption className="carousel-caption" Styles={{}}>
              <h2>{datas.title}</h2>
              <p>{datas.subtitle}</p>
            </Caption>
          </div>
          )}

          
          
        
        </div>
        {
          control.arrow==1?<>
        <a
          className="carousel-control-prev"
          href="#carouselslider"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselslider"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
        </>
        :<></>}
      </Carousel>
    
  );
};

export default CarouselSlide;
