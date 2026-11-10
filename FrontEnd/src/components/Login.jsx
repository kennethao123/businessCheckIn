import {useNavigate} from "react-router";

const url = import.meta.env.VITE_API_URL
import { useContext, useState } from 'react'
import { AppContext } from '../App.jsx'
import styles from './Login.module.css'

const Login = () => {
    const { setJwt, setUser } = useContext(AppContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        //login, set user and jwt
        e.preventDefault()
        const formData = new FormData(e.target);
        const response = await fetch(`${url}/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username" : formData.get("username"),
                "password" : formData.get("password"),
            }),
        })

        const data = await response.json();

        if (response.ok) {
            setJwt(data.token);
            setUser(data.user);
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('jwt', data.token);
            navigate('/queue');
        }
    }

    return (
        <div id={styles.login}>
            <h1>Login</h1>
            <form className={styles.loginForm} method="POST" onSubmit={handleSubmit} >
                <label htmlFor="username">Username:<input type="text" name="username"/></label>
                <label htmlFor="password">Password:<input type="text" name="password"/></label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;