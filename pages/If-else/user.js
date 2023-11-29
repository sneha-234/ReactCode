import React from "react";
 export  default function  User(props)
 {
    if(props.isPassed)
    {
        return (
            <div style={{backgroundColor:'red'}}>
                <span>Congrulations {props.name}, You  are passed</span>
            </div>
        )
    }
       return (
         
            <span style={{backgroundColor:'green'}}>Better Luck Next Time {props.name}</span>
    
       )
 }