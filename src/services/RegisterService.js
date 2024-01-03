

export const registerUser = async (data) => {
    let message;
    try {
        const response = await fetch("http://localhost:7070/usersApi/save", {
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