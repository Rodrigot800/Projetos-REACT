import React, { Fragment } from "react";
import "./style.css"

function DescriçãoComLink  (props) {

   if(!props.descrição2){
      return null; 
   }

   if (props.link) {
      return( <Fragment>

         <p className="titulo">{props.descrição2}</p>
         <p><a href={props.link}>{props.link}</a></p>
          
          </Fragment> )
   } else{
      return( <Fragment>
         <p className="titulo" ><u>{props.descrição2}</u></p>
          </Fragment> )
   }
 
}

export default DescriçãoComLink ;
