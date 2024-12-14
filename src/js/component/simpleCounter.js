import React from "react";

function SimpleCounter(prop) {
    return (
    <div className="fullCounter">
    <div className="bigCounter">
        <div className="container"><img src="https://www.svgrepo.com/show/6230/clock.svg"></img></div>
        <div className="HoursTwo">{prop.digitSix}</div>
        <div className="HoursOne">{prop.digitFive}:</div>
        <div className="MinutesTwo">{prop.digitFour}</div>
        <div className="MinutesOne">{prop.digitThree}:</div>
        <div className="SecondsTwo">{prop.digitTwo}</div>
        <div className="SecondsOne">{prop.digitOne}</div>
    </div>   
    </div>

    );
}

export default SimpleCounter;