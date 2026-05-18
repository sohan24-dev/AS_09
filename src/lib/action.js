export const postData = async (data) => {
    'use server'
    const res = await fetch("http://localhost:5000/ideadata", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return await res.json();
};