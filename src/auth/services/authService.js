

export const login = async (userLogin) => {
    let message;
    try {
        const response = await fetch(`${import.meta.env.VITE_USERS_API_BASE_URL}/auth/login`, {
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