const serviceCandidates = async (token) => {
    const response = await fetch("http://localhost:3333/api/candidates", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const candidates = await response.json();
    return candidates;
};

export default serviceCandidates;