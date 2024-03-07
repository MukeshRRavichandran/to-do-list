import React from "react";
import ReactDOM from "react-dom";

export default function eventHandler(){
    function showAlert(){
        alert("This is an alert")
    }
    const sample=()=>(console.log("Arrow function breh"))
    const clickHandler=()=>(sample(), showAlert())
    return (
        <div>
            <button onClick={clickHandler.bind(this)}>Event Demo</button>
        </div>
    )
}