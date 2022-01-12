import React from "react";

function HogDetails({ specialty, weight, greased, highestMedal }) {
    return (
        <div className="details">
            <p>Specialty: {specialty}</p>
            <p>Weight: {weight}</p>
            <p>Greased: {greased ? "Yes" : "No"}</p>
            <p>Highest Medal Achieved: {highestMedal}</p>
        </div>
    )
}

export default HogDetails;