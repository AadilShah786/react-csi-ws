import React from "react";
import Pdrill2 from './pdrill2'

function Pdrill1(prop){
    console.log()
    return(
        <div>
            <Pdrill2 message={prop.message}/>
        </div>
    )
}

export default Pdrill1;