

export const candidates = async (token) => {
    const response = await fetch ("http://localhost:3333/660/api/candidates", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Autorization: `Bearer ${token}`,
        },
    });
    const candidates = await response.json();
    return candidates;
}
console.log(candidates);