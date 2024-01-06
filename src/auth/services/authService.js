

export const login = async (userLogin) => {
    let message;
    try {
        //${import.meta.env.VITE_USERS_API_BASE_URL}
        const response = await fetch(`https://users-api-vd51.onrender.com/usersApi/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userLogin),
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
        throw new Error(`Error al iniciar Sesión: ${error}`);
    }
}