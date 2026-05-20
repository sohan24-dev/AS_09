export const postData = async (data, token) => {
    'use server'
    const res = await fetch("https://as-09-server.onrender.com/ideadata", {
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

    const res = await fetch("https://as-09-server.onrender.com/comment", {
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
        `https://as-09-server.onrender.com/idea/${id}`,
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
        `https://as-09-server.onrender.com/comment/${id}`,
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



export const updateIdea = async (id, updatedData, token) => {
    "use server"
    const res = await fetch(`https://as-09-server.onrender.com/idea/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
    });

    const data = await res.json();



    return data;


};
export const updateComment = async (id, updatedData, token) => {
    "use server"
    // console.log(updatedData, "updatedData");
    const res = await fetch(`https://as-09-server.onrender.com/comment/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ updatedData }),
    });

    return await res.json();
};