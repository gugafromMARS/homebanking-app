import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { useState } from "react";
import { loginUser } from "./components/Requests";

interface userLogin {
  email: string;
  pwd: string;
}

function App() {
  const [userLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  function userIsLoggedIn() {
    setLoggedIn((prevState) => !prevState);
  }

  let isLoggedIn: boolean = false;

  async function handleLogin(user: userLogin) {
    try {
      isLoggedIn = await loginUser(user);
    } catch (error: any) {
      setError(new Error(error.message || "Failed to login"));
    }
    setLoggedIn(isLoggedIn);
  }

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={userLoggedIn} handleLogin={userIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/login"
          element={<Login handleLogin={handleLogin} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
