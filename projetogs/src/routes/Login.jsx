import React from 'react';
import styled from 'styled-components';
import carro from '../assets/AbstractShape.png'; // Atualize o caminho conforme necessário

const colors = {
    primary: '#0bc4ca',
    hover: '#3492fd',
    background: 'rgba(255, 255, 255, 0.9)',
    text: '#8a8a8a',
    boxShadow: 'rgba(0, 0, 0, 0.1)',
};

const LoginWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 5rem 2rem;
    background-color: #f5f5f5;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    background-color: ${colors.background};
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px ${colors.boxShadow};
    width: 350px;
    text-align: center;

    h2 {
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
    }

    form {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;

        input {
            border: 1px solid ${colors.text};
            padding: 10px;
            border-radius: 5px;
            font-size: 1rem;
            background-color: #ffffff;
            transition: all 0.3s;
        }

        input:focus {
            border-color: ${colors.primary};
            outline: none;
        }

        .button {
            background-color: ${colors.primary};
            color: white;
            padding: 12px;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            border-radius: 5px;
            transition: background-color 0.3s ease;
            
            &:hover {
                background-color: ${colors.hover};
            }
        }
    }

    .register-link {
        margin-top: 10px;
        font-size: 0.9rem;
        color: ${colors.primary};
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    }
`;

const ImageContainer = styled.div`
    display: none;

    img {
        max-width: 80%;
        height: auto;
        margin-top: 1rem;
    }

    @media (min-width: 768px) {
        display: block;
    }
`;

const Login = () => {
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para validar o login
        alert('Login realizado com sucesso!');
    };

    return (
        <LoginWrapper>
            <LoginContainer>
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="seuemail@exemplo.com" required />

                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" placeholder="********" required />

                    <input type="submit" value="Entrar" className="button" />
                </form>

                <a href="/cadastro" className="register-link">Não tem uma conta? Cadastre-se</a>
            </LoginContainer>

            <ImageContainer>
                <img src={carro} alt="Imagem de Login" />
            </ImageContainer>
        </LoginWrapper>
    );
};

export default Login;
