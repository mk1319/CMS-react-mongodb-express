import React,{useState} from 'react';
import styled from 'styled-components';

export const Container = styled.div`

`;

export default function Navbar({styles,data}) {
    
  
  const Style=styles==undefined||!styles.length?{width:100,height:130,color:"white",backgroundcolor:"black"}:styles[0];
    const Data=data == undefined||!data.length
    ? [
              {
                image:"https://images.unsplash.com/photo-1614788679832-7879205af178?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80",
                title:"Hello World",
                center:true
              },
            ][0]
            : data[0]
          
            
  return (
    <Container>
    <nav className="navbar" style={{backgroundColor:Style.backgroundcolor}}>
    <div className={`container-fluid ${Data.center?'d-flex justify-content-center':''}`} >
      <a className="navbar-brand" href="#" style={{color:Style.color}}>
        <img src={Data.image} 
            alt="" width={Style.width} height={Style.height} />
        {Data.title}
      </a>
    </div>
  </nav>
    </Container>
  );
}
