import { Route, Routes } from "react-router-dom";

import AddUserView from '../views/AddUserView';
import SettingsView from '../views/SettingsView';
import HomeView from '../views/HomeView' 
import UserDetailView from '../views/UserDetailView' 


function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/add_user" element={<AddUserView />} />
                <Route path="/settings" element={<SettingsView />} />
                <Route path="/user_detail/:user_id" element={<UserDetailView />} />
            </Routes>
        </div>
    );
}

export default AppRoutes;