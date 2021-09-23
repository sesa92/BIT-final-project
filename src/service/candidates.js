

export const candidates = async (token) => {
    const response = await fetch("http://localhost:3333/api/candidates", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const candidates = await response.json();
    return candidates;
}

export const getSingleCandidate = async (token, id) => {
    const response = await fetch(`http://localhost:3333/api/candidates/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const candidate = await response.json();
    return candidate;
}