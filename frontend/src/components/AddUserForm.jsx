import { useState } from "react";

function AddUserForm() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setName("");
        setSurname("");
        setEmail("");

        // Validates whether all fields are filled before submitting the form.
        if (!name || !surname || !email) {
            alert("Please fill out all fields");
            return;
        }

        // Validate email
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        fetchUserData();
    };

    const fetchUserData = () => {
        fetch("http://localhost:5000/add_user_form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, surname, email })
        })
        .then(response => response.json())
        .then(data => alert(data))
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>

                    <legend>User Information</legend>

                    <div>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="surname">Surname:</label>
                        <input 
                            type="text" 
                            id="surname" 
                            name="surname" 
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)} 
                            required 
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>

                    <button type="submit">Submit</button>

                </fieldset>
            </form>
        </div>
    );
}

export default AddUserForm;