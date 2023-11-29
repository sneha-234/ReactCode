
import React, { useState } from "react";

const NumberComponent = () => {
  const [numberTable, setNumberTable] = useState([]);

    const handleIncrement = () => {
        let newValue = numberTable.length == 0 ? 0 : numberTable[numberTable.length -1];
        setNumberTable([ ...numberTable ,newValue + 1]);
    };
      
    
  const handleRemove = (index) => {
    const newNumberTable = numberTable.filter((ntValue , ntIndex ) => ntIndex !== index);
    setNumberTable(newNumberTable);
  };
     
  
  const handleEdit = (index) => 
        {
            const newUpdatedValue = +prompt("enter a value",numberTable[index]);
            const newArray = numberTable.map((ntValue,ntIndex) =>
        {
           if(ntIndex === index)
        {
            return newUpdatedValue;
        }
         return ntValue;
        });
       setNumberTable(newArray);
       };

    const handleReverse = () =>
    {
        const newArray = [...numberTable]
          newArray.reverse();
        setNumberTable(newArray);
    }
     
  return (
    <center>
      {numberTable.map((num, index) => (
        <div key={index}>
          <span> {num} </span>
          <button onClick={() => handleRemove(index)}>Remove</button>
          <button onClick = {() => handleEdit(index)}> Edit</button>
        </div>
      ))}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick = {handleReverse} > REVERSE</button>
      </div>
    </center>
  );
};

export default NumberComponent;
