import React, { useState } from 'react';
import "./style.scss";
import LoginIllustration from "../../assets/images/login.svg";
import { Button, Link, TextField } from "../../components";
import users from '../../constants/users';


const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find((user) => user.email === email);
        if (!user) {
            alert('Usuário não encontrado.');
            return;
        }
        if (user.senha !== senha) {
            alert('Senha incorreta.');
            return;
        }
        alert('Login realizado com sucesso!');
        // Redirecione o usuário ou atualize o estado da aplicação conforme necessário
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
                        name='E-mail' 
                        placeholder='Insira seu e-mail'
                        type='text' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField 
                        id='senha' 
                        name='Senha' 
                        placeholder='Insira sua senha'
                        type='password' 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <div className="reset-password">
                        <Link children='Esqueci minha senha' href='#' />
                    </div>
                    <Button type="submit" name="Entrar na plataforma" variant="button-filled" />
                    <div className="login-link-container">
                        Não possui cadastro? <Link children='Registre-se aqui' href='/cadastrar' />
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default Login;