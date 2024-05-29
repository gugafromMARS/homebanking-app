import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { useState } from "react";

function App() {
  const [userLoggedIn, setLoggedIn] = useState<boolean>(false);

  function handleLogIn() {
    setLoggedIn((prevState) => !prevState);
  }

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={userLoggedIn} handleLogin={handleLogIn} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
