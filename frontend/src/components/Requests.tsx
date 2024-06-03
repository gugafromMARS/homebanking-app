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

  console.log(respData);

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
