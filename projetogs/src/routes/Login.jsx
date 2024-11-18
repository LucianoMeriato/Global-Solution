import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginWrapper, LoginContainer, ImageContainer } from "../css/LoginStyle"; 
import carro from "../assets/AbstractShape.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");  
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "seuemail@gmail.com" && senha === "1234") {
            setMensagem("Login bem-sucedido!");
            setTimeout(() => navigate("/home"), 2000);  
        } else {
            setMensagem("E-mail ou senha inválidos.");
        }
    };

    return (
        <LoginWrapper>
            <LoginContainer>
                <h2>Bem-vindo de volta!</h2>
                {mensagem && <p>{mensagem}</p>} 
                <form id="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="seuemail@gmail.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    <label htmlFor="senha">Senha</label>
                    <input 
                        type="password" 
                        name="senha" 
                        id="senha" 
                        placeholder="********" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required 
                    />
                    <input type="submit" value="Entrar" className="button" />
                </form>
            </LoginContainer>
            <ImageContainer>
                <img src={carro} alt="Login Illustration" />
            </ImageContainer>
        </LoginWrapper>
    );
};

export default Login;
