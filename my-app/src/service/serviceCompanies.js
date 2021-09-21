export default serviceCompanies = async (token) => {
    const response = await fetch("http://localhost:3333/api/companies", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const companies = await response.json();
    return companies;
  };