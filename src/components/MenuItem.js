import React from "react";

function MenuItem({ image, name, price }) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p> RWF {price.toLocaleString()} </p>
        </div>
    );
}

export default MenuItem;