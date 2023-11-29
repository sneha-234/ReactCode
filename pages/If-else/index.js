import React from "react";
import User from "./user";

export  default function  Name ()
{
    return (
        <>
          <User isPassed ={true} name = "Sneha"/>
          <User isPassed = {false} name = "Priyansh" />
        </>
    );
}