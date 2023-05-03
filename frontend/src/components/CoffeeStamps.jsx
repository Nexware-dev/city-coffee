import { useEffect, useState } from "react";

// TODO: connect the COFFEE_NUMBER_REQUIRED variable from the settings
const COFFEE_NUMBER_REQUIRED = 6;

// TODO: get the CURRENT_COFFEE_COUNTER from the database
const CURRENT_COFFEE_COUNTER = 3;


function CoffeeStamps() {

    // Set up state variables to keep track of which buttons are marked
    const [markedStamps, setMarkedStamps] = useState([])

    // Set up state variable to keep track of the current coffee counter
    const [currentCounter, setCurrentCounter] = useState(CURRENT_COFFEE_COUNTER)

    // Initialize the markedStamps array
    useEffect(() => {
        const initialMarks = Array.from({ length: COFFEE_NUMBER_REQUIRED })
            .map((_, index) => index).filter((item) => item < CURRENT_COFFEE_COUNTER);
        setMarkedStamps(initialMarks);
    }, []);

    // Handle click events on the buttons
    const handleClick = (index) => {
        if (markedStamps.includes(index)) {
            setMarkedStamps(markedStamps.filter((i) => i !== index));
            setCurrentCounter(currentCounter - 1);
        } else {
            setMarkedStamps([...markedStamps, index]);
            setCurrentCounter(currentCounter + 1);
        }
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
            <p>{ markedStamps }</p>
            <p>{currentCounter}</p>
        </div>
    );
}

export default CoffeeStamps;