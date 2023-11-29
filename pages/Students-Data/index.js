import React from "react";
import data from "./data";
import UserInfo from "./studentsinfo";
import StudentSkills from "./skills";

 
export default function Name ()
{
    return data.students.map((studentsData)=>
    {
        
        return (
        <>
        <UserInfo key ={`${studentsData.id}`} students= {studentsData}/>
            
        </>
        )
    })
}