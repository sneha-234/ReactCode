import React, { useState } from "react";

export default function Counter ()
{
const[ user , setUser] = useState({
  name: "REYAAN",
  address : "indore",
  age : 22
});
 const increaseAge = () => {
 const updateUser = 
 {
    ...user,
    age : user.age +1 ,

 };
  setUser(updateUser);
 }
 return (
    <center>
     <div>
        <p> Name : {user.name}</p>
        <p> Age : {user.age}</p>
        <button onClick ={increaseAge}> AgeIncrease</button>
     </div>
  </center>
)
}
 
    
