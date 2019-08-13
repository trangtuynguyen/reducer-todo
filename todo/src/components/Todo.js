import React from 'react';
import "./Todo.css";

export default function Todo({item}){
    console.log("This is props in Todo", item)
    return(
        <div className={`task ${item.completed? ' Finished' : ''}`} 
        onClick={}
        >

            <h1>{props.item.task}</h1>

        </div>
    )
}