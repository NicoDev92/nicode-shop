

export const registerUser = async (data) => {
    let message;
    try {
        const response = await fetch(`${import.meta.env.VITE_USERS_API_BASE_URL}/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        message = await response.json();

        if (response.ok) {

            return {
                success: true,
                message: message,
            }
        }
        return {
            success: false,
            message: message,
        }
    } catch (error) {
        throw new Error(`Error al guardar: ${error}`);
    }
}