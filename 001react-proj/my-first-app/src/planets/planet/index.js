import React from "react";
import GrayImg from "../../shared";
import DescriçãoComLink from "../../shared/descrição";



const Planet = (props) => {

    let title;

    if (props.title_U) {
        title = <h4><u>{props.name}</u></h4>
    }else{
        title = <h4>{props.name}</h4>
    }
    return( 
        <div onClick={() => props.clickPlanet(props.name)}>
            
            <h2>{title}</h2>
            <p>{props.descrição}</p> 
            <DescriçãoComLink descrição2={props.descrição2} link={props.link}/>
            <GrayImg img_url={props.url_img} grayi={props.grayi}/> 

            <h3> satelites </h3>
            <ul>{['e3','b','c','d'].map ((n) => 
            <li>satelite {n}</li>)} </ul>
            <hr></hr>
        </div>

        
    )
}

export default Planet;