
import React from 'react'
import UserInfo from './studentsinfo';
import data from './data';


export default function StudentSkills()
{
    return data.students.map((item) => 
    {
    return <UserInfo key={`${item.id}`} user={item}/>;
    });
}