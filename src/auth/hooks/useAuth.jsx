import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onLogout, onLogin, onInitLogin } from "../../store/slices/auth/authSlice";
import Swal from "sweetalert2";
import { login } from "../services/authService";

const initialLoginForm = {
    username: '',
    password: '',
}

export const useAuth = () => {
    const dispatch = useDispatch();
    const { isAuth } = useSelector(state => state.auth);
    const navigate = useNavigate();


    const handlerLogin = async (userLogin) => {
        try {

            dispatch(onInitLogin());
            const isLogin = await login(userLogin);

            if (isLogin.success) {
                const user = {
                    username: isLogin.message.user.username,
                    role: isLogin.message.role[0],
                    token: isLogin.message.token,
                };
                dispatch(onLogin(user));

                sessionStorage.setItem('token', `Bearer ${isLogin.message.token}`)
                sessionStorage.setItem('login', JSON.stringify({
                    isAuth: true,
                    user
                }));

                navigate("/");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error de validación:",
                    text: "Usuario o contraseña incorrectos!",
                });
                dispatch(onLogout());
            }
        } catch (error) {
            console.error('Error durante el inicio de sesión:', error);
            dispatch(onLogout());
        }
    }

    const handlerLogout = () => {
        dispatch(onLogout());
        sessionStorage.removeItem('login');
        navigate("/");
    }

    return {
        login: {
            isAuth,
        },
        initialLoginForm,
        dispatch,
        handlerLogin,
        handlerLogout
    }
}
