import React from "react";
import Newfunction from "./module2";

export default function List(array) {
    
    const ff = array.blabla 
    // console.log(array.blabla)
    const element = ff.map((ff) => <li key = {ff.id}><Newfunction blabla = {ff} /></li>)
    return (
        <ul>
           {element}
        </ul>
    )
} 