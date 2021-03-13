import React, { useState } from 'react';
import styled from 'styled-components';


const H=styled.h1`

    color:${props=>props.Styles.color || "black"};
    background-color:${props=>props.Styles.backgroundcolor||"white"};
    text-align:${props=>props.Styles.textalign||"left"};
    font-size:${props=>props.Styles.fontsize||""}px;
    ${props=>props.Styles.padding?`padding:${props.Styles.padding.top}px ${props.Styles.padding.right}px ${props.Styles.padding.bottom}px ${props.Styles.padding.left}px `
    :"padding:0px 0px 0px 0px"};
`


function Htag({styles,data}){

    const Style=styles[0]==undefined?{}:styles[0]
    const Data=data[0]==undefined?{}:data[0];

    return (
        <H Styles={Style}>{Data.text}</H>
    )
}



export default Htag;