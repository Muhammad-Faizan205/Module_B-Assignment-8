import React from "react";
import shop from '../images/shop now.avif'
import { Productcard_component } from "./Productcard_component";

function Section_05_component(){
    return(
        <div>
        <Productcard_component/>
        <img className="m-3" src={shop} alt="" />
        </div>
    )
}

export {Section_05_component};