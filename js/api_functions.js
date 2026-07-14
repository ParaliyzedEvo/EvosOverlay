const API_BASE = "http://localhost:8080/api"

export async function getUserDataSet(id, mode) {
    try {
        return (
            await axios.get(`${API_BASE}/users/${id}/${mode}`, {
                baseURL: API_BASE,
            })
        )["data"];
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}
export async function postUserID(id) {
    try {
        let ColorData = null;
        const response = await axios.get(`${API_BASE}/color/${id}`);
        ColorData = response.data;
        return ColorData ? ColorData : { error: true };
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}

export async function postCustomID(id) {
    try {
        let ColorData = null;
        const response = await axios.get(`${API_BASE}/color/customid/${id}`);
        ColorData = response.data;
        return ColorData ? ColorData : { error: true };
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}

export async function postDefaultID(id) {
    try {
        let ColorData = null;
        const response = await axios.get(`${API_BASE}/color/default/${id}`);
        ColorData = response.data;
        return ColorData ? ColorData : { error: true };
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}

export async function getUserTop(bestid, mode) {
    try {
        return (
            await axios.get(`/users/${bestid}/best/${mode}`, {
                baseURL: API_BASE,
            })
        )["data"];
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}

export async function getMapScores(beatmapID, mode) {
    try {
        const data = (
            await axios.get(`/beatmaps/${beatmapID}/${mode}`, {
                baseURL: API_BASE,
            })
        )["data"];
        return data.length !== 0 ? data : null;
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}

export async function getMapDataSet(beatmapID) {
    try {
        return (
            await axios.get(`/beatmaps/${beatmapID}`, {
                baseURL: API_BASE,
            })
        )["data"];
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}

export async function getModsScores(beatmapID, modName) {
    try {
        const response = await axios.get(`/beatmaps/${beatmapID}/mods/${modName}`, {
            baseURL: API_BASE,
        });
        return response.data.length !== 0 ? response.data : null;
    } catch (error) {
        console.error(error);
        return null;
    }
}