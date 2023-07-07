import { useState } from "react";
import axios from "axios";
import authService from "../services/authService";

const Login = () => {
    //estados o variable (HOOKS DE REACT)
    const [titulo, setTitulo] = useState("LOGIN");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //funciones o metodos callbacks
    const funLogin = async (e) => {
        e.preventDefault();

        const user = { email: email, password: password };
        console.log(user);

        //Petición al servidor
        const { data } = authService.loginConNode(user).then(res => console.log(res));
        //axios.post("http://127.0.0.1:3000/api/auth/login", user).then((res) => console.log(res));
        console.log(data);
    };

    //retornar el html
    return (
        <>
            <h1>página: {titulo}</h1>
            <h5>CORREO: {email}</h5>
            <h5>Contraseña: {password}</h5>
            <form onSubmit={(e) => funLogin(e)}>
                <label>Ingrese Correo:</label>
                <input
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label>Ingrese Contraseña:</label>
                <input
                    type="password"
                    required
                    onChange={(parametro) => setPassword(parametro.target.value)}
                />
                <br />
                <input type="submit" />
                <input type="reset" />
                {/*<button type="button" onClick={() => funLogin()}>PRUEBA ENVIO</button>*/}
            </form>
        </>
    );
};

export default Login;
