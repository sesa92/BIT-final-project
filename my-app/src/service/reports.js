
export const reports = async (token) => {
    const response = await fetch ("http://localhost:3333/660/api/reports", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Autorization: `Bearer ${token}`,
        },
    });
    const reports = await response.json();
    return reports;
}