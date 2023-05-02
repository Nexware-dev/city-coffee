import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddUserView from './views/AddUserView';
import SettingsView from './views/SettingsView';
import HomeView from './views/HomeView' 
import NavBar from "./components/NavBar";


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/add_user" element={<AddUserView />} />
          <Route path="/settings" element={<SettingsView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
