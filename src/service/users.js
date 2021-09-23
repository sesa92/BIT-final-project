
export const users = async (token) => {
    const response = await fetch ("http://localhost:3333/660/api/users", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Autorization: `Bearer ${token}`,
        },
    });
    const users = await response.json();
    return users;
}