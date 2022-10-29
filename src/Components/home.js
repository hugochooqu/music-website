import React from "react";
import Navigation from "./navigation"
import Body from "./body"



export default function Home(){
    return(
       <div>
           <Navigation style={{position : "absolute"}} />
           <Body />

           
       </div>
    )
}