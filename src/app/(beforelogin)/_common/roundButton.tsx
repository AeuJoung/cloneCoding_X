"use client"
import React from "react";
import Image from "next/image"
import styles from "./roundButton.module.css";

interface PropType {
    innerText : string;
    linkText : string;
    color : string;
    bgcolor? : string | undefined;
    hoverColor? : string | undefined;
    width? : number | undefined;
    height? : number | undefined;
    iconImgName? : string | undefined;
}



export default function RoundButton({props} : {props : PropType}) {
    let buttonStyle = {
        width : (props.width ? props.width : 300), 
        height : (props.height ? props.height : 40), 
        lineHeight : `${props.height ? props.height : 40}px`,
        color : (props.color ? props.color : 'black'),
        backgroundColor : (props.bgcolor ? props.bgcolor : 'white'),
    }

    let logoSVG = props.iconImgName;
    
    return (
        <div style={buttonStyle} className={styles.default}>
            {props.iconImgName && <Image src={logoSVG ? logoSVG : ""} alt="home" width={18} height={18} style={{marginRight : '8px'}} /> }
            <a href={props.linkText}>{props.innerText}</a>
        </div>
    );
}