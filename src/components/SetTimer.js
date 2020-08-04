import React from 'react';
import './SetTimer.css';

function SetTimer(props){
    return (
        <div className="set-timer">
            <h4>{props.title}</h4>
            <div className="timer">
                <button onClick={props.decreaseCount}>-</button>
                <span>{props.time}</span>
                <button onClick={props.increaseCount}>+</button>
            </div>
        </div>
        
    )
}

export default SetTimer;