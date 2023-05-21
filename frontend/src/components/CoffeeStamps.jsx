import { useEffect, useState } from "react";

// TODO: connect the COFFEE_NUMBER_REQUIRED variable from the settings
const COFFEE_NUMBER_REQUIRED = 6;

function CoffeeStamps({ count, setCount, user_id }) {

  const [markedStamps, setMarkedStamps] = useState([])

  useEffect(() => {
    const initialStamps = Array.from({ length: COFFEE_NUMBER_REQUIRED })
      .map((_, index) => index)
      .filter((item) => item < count);
    setMarkedStamps(initialStamps);
  }, [count])

  const handleClick = (index) => {
    const newStamps = markedStamps.includes(index) ? markedStamps.filter((i) => i !== index) : [...markedStamps, index];
    setMarkedStamps(newStamps);

    const newCounter = count + (markedStamps.includes(index) ? -1 : 1);
    setCount(newCounter);

    handleCounterUpdate(newCounter);
  }

  const handleCounterUpdate = (newCounter) => {
    fetch("http://localhost:5000/update_counter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({newCounter, user_id}),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  };

  return (
    <div>
      {Array.from({ length: COFFEE_NUMBER_REQUIRED })
        .map((_, index) => (
          <button key={index}
                  onClick={() => handleClick(index)}
                  style={{ backgroundColor: markedStamps.includes(index) ? "green" : "gray" }}
          >Button number: {index}</button>
        ))
      }
      <p>{markedStamps}</p>
    </div>
  )
}

export default CoffeeStamps;