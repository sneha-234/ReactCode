import React, { useState } from 'react';

const Button = ({ number, onClick }) => {
  return (
    <button onClick={() => onClick(number)}>
      {number}
    </button>
  );
};

const MultiplicationTable = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleButtonClick = (number) => {
    setSelectedNumber(number);

    // Print the multiplication table
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  };

  return (
    <div>
      <h2>Multiplication Table Printer</h2>
      <div>
        {[1, 2, 3, 4, 5].map((number) => (
          <Button key={number} number={number} onClick={handleButtonClick} />
        ))}
      </div>
      <div>
        {selectedNumber && (
          <p>
            Multiplication Table for {selectedNumber}:
            <br />
            {[...Array(10)].map((_, index) => (
              <span key={index}>
                {selectedNumber} x {index + 1} = {selectedNumber * (index + 1)}
                <br />
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default MultiplicationTable;
