import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }) => {

    const {
        login,
        initialLoginForm,
        dispatch,
        handlerLogin,
        handlerLogout
    } = useAuth();

    return (
        <AuthContext.Provider
            value={
                {
                    login,
                    initialLoginForm,
                    dispatch,
                    handlerLogin,
                    handlerLogout
                }
            }>
            {children}
        </AuthContext.Provider>
    )
}