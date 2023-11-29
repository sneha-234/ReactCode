import React from "react";

export default function ImagesComponent (props)
{
    return (
      <>
        <span>{props.Name}</span>
        <span>{props.Alt}</span>
        <span>{props.Heigth}</span>
        <span>{props.Width}</span>
      </>
    )

    
}