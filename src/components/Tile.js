import React, { useState } from "react";
import HogDetails from "./HogDetails.js"

function Tile({ hogData }) {
    const [clicked, setClicked] = useState("false")

    function handleClick() {
        setClicked(!clicked)
    }

    return (
        <div className="pigTile">
            <img height="200" width="400" src={hogData.image} alt={hogData.name + "Image"} title={hogData.name} onClick={handleClick}/>
            <h2>Name: {hogData.name}</h2>
            {clicked ? null : <HogDetails specialty={hogData.specialty} weight={hogData.weight} greased={hogData.greased} highestMedal={hogData["highest medal achieved"]} />}
        </div>
    )
    
    
}

export default Tile;