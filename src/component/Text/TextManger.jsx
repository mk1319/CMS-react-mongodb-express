import React, { useState } from 'react';
import styled from 'styled-components';

const P=styled.p`

    color:${props=>props.Styles.color || "black"};
    background-color:${props=>props.Styles.backgroundcolor||"white"};
    text-align:${props=>props.Styles.textalign||"left"};
    font-size:${props=>props.Styles.fontsize||"20"}px;
    ${props=>props.Styles.padding?`padding:${props.Styles.padding.top}px ${props.Styles.padding.right}px ${props.Styles.padding.bottom}px ${props.Styles.padding.left}px `
    :"padding:0px 0px 0px 0px"};
    ${props=>props.Styles.customstyle?props.Styles.customstyle:""}
`
const H=styled.h1`

    color:${props=>props.Styles.color || "black"};
    background-color:${props=>props.Styles.backgroundcolor||"white"};
    text-align:${props=>props.Styles.textalign||"left"};
    font-size:${props=>props.Styles.fontsize||""}px;
    ${props=>props.Styles.padding?`padding:${props.Styles.padding.top}px ${props.Styles.padding.right}px ${props.Styles.padding.bottom}px ${props.Styles.padding.left}px `
    :"padding:0px 0px 0px 0px"};
`

const Label=styled.label`

    color:${props=>props.Styles.color || "black"};
    background-color:${props=>props.Styles.backgroundcolor||"white"};
    text-align:${props=>props.Styles.textalign||"left"};
    font-size:${props=>props.Styles.fontsize||""}px;
    ${props=>props.Styles.padding?`padding:${props.Styles.padding.top}px ${props.Styles.padding.right}px ${props.Styles.padding.bottom}px ${props.Styles.padding.left}px `
    :"padding:0px 0px 0px 0px"};
`




function Ptag({styles,data}) {

    const [Style,setStyle]=useState(styles[0]==undefined?{}:styles[0]);
    const [Data,setData]=useState(data[0]==undefined?{}:data[0]);
    

    return (
        <P Styles={Style}>{Data.text}ptasdasag</P>
    )
}

function Htag({styles,data}){

    const [Style,setStyle]=useState(styles[0]==undefined?{}:styles[0]);
    const [Data,setData]=useState(data[0]==undefined?{}:data[0]);

    return (
        <H Styles={Style}>{Data.text}</H>
    )
    
}

function Labeltag({styles,text}){

    const [Style,setStyle]=useState(styles||{padding:{top:100,right:100,bottom:100,left:0}});

 
    return (
        <Label Styles={Style} tooltiop="hello" title={Style.tooltip}>{text}</Label>
    )
}

export const c={Ptag,Htag};