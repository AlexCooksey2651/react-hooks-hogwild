import React, { useState } from "react";
import Tile from "./Tile"

function TileContainer({ hogs }) {
    const [displayHogs, setDisplayHogs] = useState(hogs)
    const [filtered, setFiltered] = useState(false);
    const [sorted, setSorted] = useState(false)
    
    function filterHogs(event) {
        setFiltered(!filtered)
        if (event.target.checked) {
            const filteredTiles = displayHogs.filter(hog => hog.greased === true)
            setDisplayHogs(filteredTiles)
        } else {
            setDisplayHogs(hogs)
        }
    }

    function sortHogs(event) {
        setSorted(!sorted)
        if (event.target.checked) {
            let sortedHogs = displayHogs.slice().sort((a, b) => {
                if (a.name < b.name) return -1
                if (a.name > b.name) return 1
                return 0
            })
            setDisplayHogs(sortedHogs)
        } else {
            setDisplayHogs(hogs)
        }
    }

    

    return (
        <div className="tileContainer">
            <span>Show Only Greased Hogs: <input type="checkbox" id="filter" onChange={filterHogs}></input></span>
            <br />
            <span>Sort By Name: <input type="checkbox" id="sort" onChange={sortHogs}></input></span>
            <br />
            {displayHogs.map(hog => {
                return <Tile key={hog.name} hogData={hog} />
            })}
        </div>
    )
}

export default TileContainer