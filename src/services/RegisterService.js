

export const registerUser = async (data) => {
    let message;
    try {
        //`${import.meta.env.VITE_USERS_API_BASE_URL}/save`
        const response = await fetch('https://users-api-vd51.onrender.com/usersApi/save', {
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