const API_URL = "http://localhost:5000/api"

export const taskGetList = async () => {
    try {
        const response = await fetch(`${API_URL}/task/list`);

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

export async function getTask(id) {
    try {
        const response = await fetch(`${API_URL}/task/${id}`);

        if (!response.ok) {
            throw new Error("El recurso solicitado no se encuentra.");
        }

        return data = response.json();
    } catch (error) {
        throw new Error(`Ocurrio un error: ${error}`);
    }
}

