interface User {
  name: string;
  age: number;
  address: string;
  email: string;
  pass: string;
  retryPass: string;
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
