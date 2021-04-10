import React,{useState} from 'react';
import styled from 'styled-components';

export const Iframe = styled.iframe`
`;

export default function Youtube({styles,data}) {
    
  
  const Style=styles==undefined || !styles.length?{width:100,height:10,color:"white",backgroundcolor:"black"}:styles[0];
    const Data=data == undefined||!data.length
    ? [
              {
                link:"https://images.unsplash.com/photo-1614788679832-7879205af178?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80",
              },
            ][0]
            : data[0]
            

            console.log(Style.width)

  return (
    <div className="container" style={{display:'flex',justifyContent:'center',marginTop:15}}>
        <Iframe height={`${Style.height?Style.height:"100"}`}  width={`${Style.width?Style.width:"100"}`} src={Data.link} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
    </div>
  );
}


export function YoutubeFlex({styles,data}) {
    
  
    const Style=styles==undefined || !styles.length?{width:100,height:10,color:"white",backgroundcolor:"black"}:styles[0];
      const Data=data == undefined||!data.length
      ? [
                {
                  link:"https://images.unsplash.com/photo-1614788679832-7879205af178?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80",
                },
              ][0]
              : data[0]
              
  
              console.log(Style.width)
  
    return (
      <div className="container" style={{display:'flex',justifyContent:'center'}}>
          <Iframe height={`${Style.height?Style.height:"100"}`} style={{flex:2}} width={`${Style.width?Style.width:"100"}`} src={Data.link} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        <div style={{flex:2,display:'flex',flexDirection:'column',marginLeft:40}}>
                <h1>{Data.title}</h1>
                <p style={{fontSize:18}}>{Data.p}</p>
        </div>
      </div>
    );
  }



