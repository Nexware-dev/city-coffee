import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddUserView from './views/AddUserView';
import SettingsView from './views/SettingsView';
import HomeView from './views/HomeView' 


function App() {

  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add_user">Add User</Link>
          <Link to="/settings">Settings</Link>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/add_user" element={<AddUserView />} />
            <Route path="/settings" element={<SettingsView />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
