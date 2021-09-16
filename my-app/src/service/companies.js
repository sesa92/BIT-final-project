export const companies = async (token) => {
    const response = await fetch("http://localhost:3333/660/api/companies", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const companies = await response.json();
    return companies;
  };