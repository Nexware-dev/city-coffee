import { useState, useEffect } from "react";

function SettingsView() {

    const [test, setTest] = useState("placeholder") 

    useEffect(() => {
        fetch("/")
        .then(response => response.json())
        .then(data => setTest(data))
    }, [])

    return (
        <h1>{test}</h1>
    );
}

export default SettingsView;