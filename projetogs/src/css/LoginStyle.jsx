import styled from "styled-components";

const colors = {
    primary: "#008a5c",
    hover: "#008a77",
    background: "#66FF99",
    text: "#000",
    boxShadow: "rgba(0, 0, 0, 0.1)",
    inputBackground: "#f9fffc",
    heading: "#000",
};

export const LoginWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 4rem 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 2rem;
    }
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    background-color: ${colors.background};
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px ${colors.boxShadow};
    max-width: 400px;
    margin: auto;
    text-align: center;

    h2 {
        font-size: 1.6rem;
        margin-bottom: 1rem;
        color: ${colors.heading};
    }

    form {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 0.5rem;
            text-align: left;
            color: ${colors.text};
            font-size: 0.9rem;
        }

        input {
            border: 1px solid ${colors.text};
            padding: 10px;
            margin-bottom: 1rem;
            background: ${colors.inputBackground};
            border-radius: 5px;
            transition: border-color 0.3s;

            &:focus {
                border-color: ${colors.primary};
                outline: none;
            }
        }

        .button {
            background-color: ${colors.primary};
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.3s, transform 0.2s;

            &:hover {
                background-color: ${colors.hover};
            }

            &:active {
                transform: scale(0.98);
            }
        }
    }
`;

export const ImageContainer = styled.div`
    img {
        max-width: 90%; 
        height: auto;
        margin-left: 20px; 

        @media (max-width: 768px) {
            margin: 2rem auto;
            display: block;
        }
    }
`;
