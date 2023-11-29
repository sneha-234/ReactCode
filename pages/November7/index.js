import React from "react";
import Button from "./button";

export default function User ()
{  
    const handleclick = () =>
    {
        alert("Button clicked !");
    }
    return(
        <>
          <Button   label = "success"onClick = {handleclick} variant = "success"/>
          <Button   label = "failure " onClick ={handleclick} variant = "failure"/>
          <Button label = "alert" onClick ={handleclick} variant = "alert" />
          <Button   label = "warning" onClick ={handleclick}   variant ="warning" />
        </>
    )
}