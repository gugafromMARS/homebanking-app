import { MoveCreateDto } from "../pages/dashboard/Dashboard";

interface User {
  name: string;
  age: number;
  address: string;
  email: string;
  pwd: string;
}

interface userLogin {
  email: string;
  pwd: string;
}

interface AccountCreateDto {
  ownerName: string;
  ownerEmail: string;
  age: number;
  address: string;
  accType: string;
}

export async function createUser(user: User): Promise<void> {
  const response: Response = await fetch(
    "http://localhost:8080/api/user/register",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const respData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to create a user");
  }
  return respData.message;
}

export async function loginUser(user: userLogin) {
  const response: Response = await fetch(
    "http://localhost:8080/api/user/login",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const respData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  return respData;
}

export async function getAccounts(email: string) {
  const response: Response = await fetch(
    `http://localhost:8081/api/account/getAccounts?email=${email}`
  );
  const respData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to get accounts");
  }
  return respData;
}

export async function getCoords(city: string) {
  const coords: Response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=Japan&limit=1&appid=5430b32bd4c05a83b0860efd6c7c9de5`
  );

  const coordsData = await coords.json();

  const lat = await coordsData[0].lat;
  const lon = await coordsData[0].lon;

  const response: Response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=65fd81137481c2dbe32e31dc3197545f`
  );

  const respData = await response.json();

  console.log(respData);

  if (!response.ok) {
    throw new Error("Failed to get city");
  }

  return respData;
}

export async function createAcc(acc: AccountCreateDto) {
  const response: Response = await fetch("http://localhost:8081/api/account", {
    method: "POST",
    body: JSON.stringify(acc),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const respData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to create acc");
  }

  return respData;
}

export async function getMovements(accNumber: number) {
  const response: Response = await fetch(
    `http://localhost:8081/api/account/movements?id=${accNumber}`
  );

  const respData = response.json();

  if (!response.ok) {
    throw new Error("Failed to get account movements");
  }

  return respData;
}

export async function deposit(move: MoveCreateDto) {
  const response: Response = await fetch(
    "http://localhost:8081/api/account/movements/deposit",
    {
      method: "POST",
      body: JSON.stringify(move),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const respData = response.json();

  if (!response.ok) {
    throw new Error("Failed to deposit in your account");
  }

  return respData;
}
export async function payment(move: MoveCreateDto) {
  const response: Response = await fetch(
    "http://localhost:8081/api/account/movements/payment",
    {
      method: "POST",
      body: JSON.stringify(move),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const respData = response.json();

  if (!response.ok) {
    throw new Error("Failed to deposit in your account");
  }

  return respData;
}
export async function transfer(move: MoveCreateDto) {
  const response: Response = await fetch(
    "http://localhost:8081/api/account/movements/transfer",
    {
      method: "POST",
      body: JSON.stringify(move),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const respData = response.json();

  if (!response.ok) {
    throw new Error("Failed to deposit in your account");
  }

  return respData;
}
