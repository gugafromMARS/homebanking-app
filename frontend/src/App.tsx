import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { useState } from "react";
import { getAccounts, loginUser } from "./components/Requests";
import { ProtectedRoute } from "./components/ProtectedRoute";

interface userLogin {
  email: string;
  pwd: string;
}

interface Accounts {
  id: number;
  ownerName: string;
  ownerEmail: string;
  balance: number;
  accType: string;
}

interface UserSuccessfullLogin {
  id: number;
  name: string;
  email: string;
}

interface UserDto {
  ownerName: string;
  ownerEmail: string;
  accounts: Accounts[];
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
  };

  async function handleLogin(user: userLogin) {
    try {
      isLoggedIn = { ...(await loginUser(user)) };
      setLoggedIn(true);
      if (isLoggedIn) {
        const newUser: UserDto = {
          ownerName: isLoggedIn.name,
          ownerEmail: user.email,
          accounts: [],
        };
        const accounts = await handleUserInfo(user.email);
        if (accounts && accounts.length > 0) {
          newUser.accounts = accounts;
        }
        setUserDto(newUser);
      }
    } catch (error: any) {
      setError(new Error(error.message || "Failed to login"));
      setLoggedIn(false);
    }
  }

  async function handleUserInfo(userEmail: string): Promise<Accounts[]> {
    try {
      const accs = await getAccounts(userEmail);
      return [...accs];
    } catch (error: any) {
      setError(new Error(error.message || "Failed to get user info"));
      return [];
    }
  }

  return (
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
  );
}

export default App;
