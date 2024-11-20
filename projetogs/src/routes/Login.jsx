import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginWrapper, LoginContainer, ImageContainer } from "../css/LoginStyle"; 
import carro from "../assets/AbstractShape.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");  
    const [carregando, setCarregando] = useState(false);  
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setCarregando(true);

        try {
            const response = await axios.post("http://localhost:5000/login", {
                email,
                senha,
            });

            setMensagem(response.data.message || "Login bem-sucedido!");
            
            setTimeout(() => navigate("/home"), 2000);
        } catch (error) {
            setMensagem(error.response?.data?.message || "Erro ao realizar o login.");
        } finally {
            setCarregando(false);
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
                    <input 
                        type="submit" 
                        value={carregando ? "Carregando..." : "Entrar"} 
                        className="button" 
                        disabled={carregando} 
                    />
                </form>
            </LoginContainer>
            <ImageContainer>
                <img src={carro} alt="Login Illustration" />
            </ImageContainer>
        </LoginWrapper>
    );
};

export default Login;
