import React, { useState } from 'react';
import "./style.scss";
import LoginIllustration from "../../assets/images/login.svg";
import { Button, Link, TextField } from "../../components";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
// import Eye from "../../assets/icons/Eye.png";
// import EyeOff from "../../assets/icons/EyeOff.png";

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
=======
import { useUser } from '../../hooks/UserContext';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
>>>>>>> 1bf56749a2b0b0789df00ba4b073f70377a87089
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { loginUser } = useUser();

<<<<<<< HEAD
    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
=======
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('http://localhost:3000/usuarios');
            const users = response.data;
>>>>>>> 1bf56749a2b0b0789df00ba4b073f70377a87089

            const filteredUsers = users.filter((user) => user.email === form.email && user.senha === form.password);

<<<<<<< HEAD
        const user = users.find(user => user.email === email);
        if (!user) {
            alert('Usuário não encontrado.');
            setLoading(false);
            return;
=======
            if (filteredUsers.length > 0) {
                console.log('Usuário logado');
                const userData = {
                    name: filteredUsers[0].nome,
                    email: form.email,
                    userType: filteredUsers[0].userType
                };
                console.log(userData)
                loginUser(userData);
                navigate('/home');
            } else {
                setError('E-mail ou senha inválidos');
            }
        } catch (error) {
            setError('Problema ao conectar-se ao servidor. Tente novamente mais tarde.');
>>>>>>> 1bf56749a2b0b0789df00ba4b073f70377a87089
        }
    };


    return (
        <div className='login-container'>
            <img src={LoginIllustration} alt="login-illustration" className="login-illustration"/>
            <div className='left-side'>
                <p>Acesse sua conta para <strong>desbloquear</strong> todo o <strong>potencial</strong> da nossa plataforma</p>
            </div>
            <div className='login-card'>
                <form onSubmit={handleLogin}>
                    <div className="title">
                        <h1>Login</h1>
                        <p>Já é membro? Faça login para começar.</p>
                    </div>
                    <TextField 
                        id='email' 
                        name='email' 
                        placeholder='Insira seu e-mail'
                        type='text' 
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                    <TextField 
                        id='senha' 
                        name='password' 
                        placeholder='Insira sua senha'
                        type='password' 
                        value={form.password}
                        onChange={e => setForm({ ...form, password: e.target.value })}
                    />
                    <div className="reset-password">
                        <Link children='Esqueci minha senha' href='#' />
                    </div>
                    <Button type="submit" name="Entrar na plataforma" variant="button-filled" />
                    <div className="login-link-container">
                        Não possui cadastro? <Link children='Registre-se aqui' href='/cadastrar' />
                    </div>
                </form>
                {error && <p id='error'className="error-message">{error}</p>}
            </div>
        </div>
    );
}

export default Login;
