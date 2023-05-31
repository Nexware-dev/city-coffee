import { Link } from "react-router-dom";

import "../assets/styles/components/NavBar.css";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add_user">Add User</Link>
            <Link to="/settings">Settings</Link>
        </nav>
    );
}

export default NavBar;