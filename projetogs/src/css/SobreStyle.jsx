import styled from 'styled-components';
import header from '../assets/header.png';

export const SobreStyle = styled.section`
    * {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        scroll-padding-top: 4rem;
        list-style: none;
        text-decoration: none;
    }

    section {
        padding: 4.5rem 0 3rem;
    }

    .container {
        max-width: 1068px;
        margin: 0 auto;
    }

    .sobre {
        margin-top: 5rem;
        background: url(${header});
        background-size: cover;
        background-position: center;
        height: 440px;
        border-radius: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        text-align: center;
        padding: 20px;
    }

    .sobre h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .sobre p {
        font-size: 1.2rem;
        line-height: 1.6;
        margin: 0 15%;
    }

    .acoes {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 3rem;
        padding: 50px 20px;
    }

    .acoes .box {
        padding: 30px;
        box-shadow: 2px 2px 18px rgba(14, 52, 54, 0.15);
        text-align: center;
        border-radius: 1rem;
        background-color: #99FFCC;
        transition: all 0.3s ease-in-out;
    }

    .acoes .box:hover {
        background: #66FF99;
        color: #000;
        transform: translateY(-10px);
    }

    .acoes h3 {
        font-size: 1.5rem;
        margin-bottom: 15px;
    }

    .acoes p {
        font-size: 1rem;
        color: #333;
    }

    /* Responsividade */
    @media (max-width: 768px) {
        .sobre {
            height: auto;
            padding: 40px 20px;
        }

        .sobre h1 {
            font-size: 2rem;
        }

        .sobre p {
            margin: 0 10%;
        }

        .acoes {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
    }

    @media (max-width: 480px) {
        .sobre h1 {
            font-size: 1.8rem;
        }

        .sobre p {
            margin: 0 5%;
            font-size: 1rem;
        }
    }
`;
