function CoffeeClaim({ user_id, setCount, disabled }) {

    const handleClick = () => {
        fetch("http://localhost:5000/reset_count", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {user_id} )
        })
        .then((response) => response.json())
        .then((data) => console.log(data))

        setCount(0);
    };

    return (
      <div>
        <button onClick={() => handleClick()} disabled={disabled}>
          Claim a free coffe!!!
        </button>
      </div>
    );
  }

export default CoffeeClaim;