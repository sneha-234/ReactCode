import React from "react";
import ImagesComponent from "./imagtag";

export default function Images ()
{
    let obj={
        imageurl:<img src ="images/sneha.png" alt ="PDF tO JPG converter"
        height = ''
        width  = ''/>
        

    }
    
    return (
        <>
        <ImagesComponent 
         Name = {obj.imageurl}
         Alt = {obj.alt} 
         Height ={obj.height = '200'} 
         Width = {obj.width = 'auto'}/>
        </>
    )
}