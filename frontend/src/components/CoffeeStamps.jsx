import { useEffect, useState } from "react";

// TODO: connect the COFFEE_NUMBER_REQUIRED variable from the settings
const COFFEE_NUMBER_REQUIRED = 6;

function CoffeeStamps({ count, user_id, setCount }) {

    // Set up state variables to keep track of which buttons are marked
    const [markedStamps, setMarkedStamps] = useState([])

    // Set up state variable to keep track of the current coffee counter
    const [currentCounter, setCurrentCounter] = useState(count)

    // Initialize the markedStamps array
    useEffect(() => {
        const initialMarks = Array.from({ length: COFFEE_NUMBER_REQUIRED })
            .map((_, index) => index)
            .filter((item) => item < count);
        setMarkedStamps(initialMarks);
        setCurrentCounter(count)
    }, [count]);

    // Handle click events on the buttons
    const handleClick = (index) => {
        const newCounter = currentCounter + (markedStamps.includes(index) ? -1 : 1);
        const newMarks = markedStamps.includes(index)
          ? markedStamps.filter((i) => i !== index)
          : [...markedStamps, index];
    
        setCurrentCounter(newCounter);
        setMarkedStamps(newMarks);
        handleCounterChange(newCounter);
      };

  const handleCounterChange = (newCounter) => {
    fetch("http://localhost:5000/update_counter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currentCounter: newCounter, user_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Update the count state variable in the parent component
        setCount(newCounter);
      });
  };

    return (
        <div>
            {Array.from({ length: COFFEE_NUMBER_REQUIRED })
            .map((_, index) => (
                <button key={index} 
                        onClick={() => handleClick(index)} 
                        style={{ backgroundColor: markedStamps.includes(index) ? "green" : "gray"}}
                >Button number: {index}</button>
            ))}
        </div>
    );
}

export default CoffeeStamps;