import { useState, useEffect } from "react";

function SettingsView() {

    const [test, setTest] = useState("placeholder") 

    useEffect(() => {
        fetch("http://localhost:5000/")
        .then(response => response.json())
        .then(data => setTest(data.greetings))
    }, [])

    return (
        <h1>{test}</h1>
    );
}

export default SettingsView;