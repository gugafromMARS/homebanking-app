import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { useState } from "react";
import { loginUser } from "./components/Requests";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { MantineProvider } from "@mantine/core";
interface userLogin {
  email: string;
  pwd: string;
}

interface UserSuccessfullLogin {
  id: number;
  name: string;
  email: string;
  address: string;
  photo: string | null;
}

export interface UserDto {
  ownerName: string;
  ownerEmail: string;
  ownerAddress: string;
  photo: string | null;
}

function App() {
  const [userLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [userDto, setUserDto] = useState<UserDto | null>(null);

  function userIsLoggedIn() {
    setLoggedIn((prevState) => !prevState);
  }

  let isLoggedIn: UserSuccessfullLogin = {
    id: 0,
    name: "",
    email: "string",
    address: "",
  };

  async function handleLogin(user: userLogin) {
    try {
      isLoggedIn = { ...(await loginUser(user)) };
      setLoggedIn(true);
      if (isLoggedIn) {
        const newUser: UserDto = {
          ownerName: isLoggedIn.name,
          ownerEmail: user.email,
          ownerAddress: isLoggedIn.address,
          photo: isLoggedIn.photo,
        };
        setUserDto(newUser);
      }
    } catch (error: any) {
      setError(new Error(error.message || "Failed to login"));
      setLoggedIn(false);
    }
  }

  return (
    <MantineProvider>
      <BrowserRouter>
        <Navbar isLoggedIn={userLoggedIn} handleLogin={userIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/login"
            element={<Login handleLogin={handleLogin} />}
          ></Route>
          <Route element={<ProtectedRoute isLoggedIn={userLoggedIn} />}>
            <Route path="/dashboard" element={<Dashboard user={userDto} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
