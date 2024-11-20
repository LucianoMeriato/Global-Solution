import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginWrapper, LoginContainer, ImageContainer } from "../css/LoginStyle"; 
import carro from "../assets/AbstractShape.png";

const Cadastrar = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");  
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/register", {
                nome,
                email,
                telefone,
                cpf,
                senha,
            });

            setMensagem(response.data.message || "Cadastro realizado com sucesso!");
            
            setTimeout(() => navigate("/home"), 2000);
        } catch (error) {
            setMensagem(error.response?.data?.message || "Erro ao realizar o cadastro.");
        }
    };

    return (
        <LoginWrapper>
            <LoginContainer>
                <h2>Seja Bem-Vindo(a)!</h2>
                {mensagem && <p>{mensagem}</p>} 
                <form id="registro-form" onSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome Completo</label>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        minLength="6" 
                        placeholder="John Doe" 
                        required 
                    />
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seuemail@gmail.com" 
                        required 
                    />
                    <label htmlFor="telefone">Telefone</label>
                    <input 
                        type="tel" 
                        name="telefone" 
                        id="telefone" 
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        placeholder="(11) 99999-6666" 
                        minLength="11" 
                        maxLength="11" 
                        required 
                    />
                    <label htmlFor="cpf">CPF</label>
                    <input 
                        type="text" 
                        name="cpf" 
                        id="cpf" 
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        placeholder="111.222.333-55" 
                        minLength="11" 
                        maxLength="11" 
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
                    <input type="submit" value="Registrar" className="button" />
                </form>
            </LoginContainer>
            <ImageContainer>
                <img src={carro} alt="Cadastro Illustration" />
            </ImageContainer>
        </LoginWrapper>
    );
};

export default Cadastrar;
