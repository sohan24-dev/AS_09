export const getIdeaData = async () => {
    try {
        const res = await fetch("https://as-09-server.onrender.com/ideadata");

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        return data

    } catch (error) {
        // console.error(error);
    }
};


export const getSingleIdea = async (id, token) => {
    try {
        const res = await fetch(`https://as-09-server.onrender.com/ideadata/${id}`, {
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch idea");
        }

        const data = await res.json();

        return data;

    } catch (error) {
        // console.log(error);
    }
};


export const homepagedata = async () => {
    try {
        const res = await fetch("https://as-09-server.onrender.com/homedata");

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        return data
        // console.log(data);
        return data;
    } catch (error) {
        // console.error(error);
    }
};



export const getComment = async () => {
    try {
        const res = await fetch("https://as-09-server.onrender.com/comment");

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        return data
        // console.log(data);
        return data;
    } catch (error) {
        // console.error(error);
    }
};

export const filterIdea = async (search = "", category = "") => {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (category) params.append("category", category);

    const res = await fetch(
        `http://localhost:5000/ideafilter?${params.toString()}`,
        { cache: "no-store" }
    );

    return res.json();
}
