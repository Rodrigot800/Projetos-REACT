import React, { Fragment } from "react";
import "./style.css"

function GrayImg(props) {
 return( <img className={props.grayi ? "gray" : "color-img"} src= {props.img_url}></img> )
}

export default GrayImg;
