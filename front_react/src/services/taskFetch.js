const API_URL = "http://localhost:5000/"


export const taskGetList = async () => {
    try {
        const response = await fetch(`${API_URL}api/task/list`);

        if (!response.ok) {
            throw new Error("El recurso solicitado no se encuentra.");
        }

        const data = response.json();
        return data;

    } catch (error) {
        console.error("Ocurrió un error: ", error);
        throw error;
    }
}