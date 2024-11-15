import styled from "styled-components";

const colors = {
    primary: '#0bc4ca',
    hover: '#3492fd',
    background: '#000000',
    text: '#8a8a8a',
    boxShadow: 'rgba(0, 0, 0, 0.1)',
};

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    background-color: ${colors.background};
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px ${colors.boxShadow};
    width: 100%;
    max-width: 350px;
    margin: auto;
    text-align: center;

    h2 {
        font-size: 1.6rem;
        font-weight: bold;
    }

    form {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;

        input {
            border: 1px solid ${colors.text};
            padding: 10px;
            margin-bottom: 1rem;
            background: #ffffff;
            font-size: 1rem;
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
`;
