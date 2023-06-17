import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";

import "./assets/styles.css";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
