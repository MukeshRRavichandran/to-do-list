import React from "react";

const names = ['Mukesh', 'Vishnu', 'Vishwa', 'Harish'];

export default function SimpleList() {
    return (
        <div>
            <h2>Friends List</h2>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>&nbsp;{name}</li>
                ))}
            </ul>
        </div>
    );
}