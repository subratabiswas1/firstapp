import React from "react";

const Sresult = (props) =>{
    const imgsrc =`https://source.unsplash.com/500x400/?${props.text}`;
    return (
        <>
            <div className="resultImg">
                <img src={imgsrc} alt="search"/>
            </div>
        </>
    );
}
export default Sresult;