import React from "react";

const SlotM = (Props)=>{
    let {x,y,z} = Props;
    if(x===y && y===z)
    {
        return (
            <>
                <h1>{x} {y} {z}</h1>
                <h2>This is matching</h2>
                <hr/>
            </>
        );
    }
    else
    {
        return (
            <>
                <h1>{x} {y} {z}</h1>
                <h2>This is not matching</h2>
                <hr/>
            </>
        );
    }
}
export default SlotM;