import React, { useState } from 'react';
import styled from 'styled-components';


const H=styled.h1`

    color:${props=>props.Styles.color || "black"};
    background-color:${props=>props.Styles.backgroundcolor||"white"};
    text-align:${props=>props.Styles.textalign||"left"};
    font-size:${props=>props.Styles.fontsize||""}px;
    ${props=>props.Styles.padding?`padding:${props.Styles.padding.top}% ${props.Styles.padding.right}% ${props.Styles.padding.bottom}% ${props.Styles.padding.left}% `
    :"padding:0px 0px 0px 0px"};
    ${props=>props.Styles.margin?`margin:${props.Styles.margin.top}% ${props.Styles.margin.right}% ${props.Styles.margin.bottom}% ${props.Styles.margin.left}% `
    :"margin:0px 0px 0px 0px"};
    ${props=>props.Styles.customstyle}
`


function Htag({styles,data}){

    const Style=styles[0]==undefined?{}:styles[0]
    const Data=data[0]==undefined?{}:data[0];

    return (
        <H Styles={Style}>{Data.text}</H>
    )
}



export default Htag;