export const postData = async (data, token) => {
    'use server'
    const res = await fetch("http://localhost:5000/ideadata", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    return await res.json();
};
export const commentData = async (data, token) => {
    'use server';

    const res = await fetch("http://localhost:5000/comment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    return await res.json();
};


export const handleDelete = async (id, token) => {
    'use server'
    const res = await fetch(
        `http://localhost:5000/idea/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await res.json();
    return data
    // console.log(data);
};
export const handleDeleteComment = async (id, token) => {
    'use server'
    const res = await fetch(
        `http://localhost:5000/comment/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await res.json();
    return data
    // console.log(data);
};