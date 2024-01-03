import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import { useNavigate } from "react-router-dom";
import { onLogin } from "../services/authService";
import Swal from "sweetalert2";

const initialLoginForm = {
    username: '',
    password: '',
}

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}

export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);
    const navigate = useNavigate();

    const handlerLogin = async (userLogin) => {
        const isLogin = await onLogin(userLogin);
        if (isLogin.success) {
            const user = {
                username: isLogin.message.user.username,
                role: isLogin.message.role[0],
                token: isLogin.message.token,
            };
            dispatch({
                type: 'login',
                payload: user,
            });

            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user
            }));
        } else {
            Swal.fire({
                icon: "error",
                title: "Error de validación:",
                text: "Usuario o contraseña incorrectos!",
            });
        }
    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout',
        })
        sessionStorage.removeItem('login');
        navigate("/")
    }


    return {
        login,
        initialLoginForm,
        dispatch,
        handlerLogin,
        handlerLogout
    }
}