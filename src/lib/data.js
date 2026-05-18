export const getIdeaData = async () => {
    try {
        const res = await fetch("http://localhost:5000/ideadata");

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


export const getSingleIdea = async (id) => {
    try {
        const res = await fetch(`http://localhost:5000/ideadata/${id}`, {
            cache: "no-store",
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