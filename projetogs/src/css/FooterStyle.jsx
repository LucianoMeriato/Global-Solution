import styled from "styled-components";

const colors = {
    primary: '#66FF99',
    secondary: '#fff',
    linkHover: '#314862',
    socialHover: '#192f6a',
};

const fonts = {
    heading: '1.7rem',
    subHeading: '1rem',
    body: '0.8rem',
};

export const FooterStyle = styled.footer`
    .newsletter {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 5rem;
        justify-content: center;
        text-align: center;
        padding: 0 10px;
        margin-bottom: 10rem;
    }
    
    .newsletter h2 {
        font-size: ${fonts.heading};
        margin-bottom: 5rem;
    }
    
    .newsletter form {
        background: ${colors.secondary};
        box-shadow: 2px 2px 18px rgba(14, 52, 54, 0.15);
        padding: 5px 10px;
        border-radius: 5rem;
       
    }
    
    .newsletter form input {
        border: none;
        outline: none;
        font-size: 1rem;
    }
    
    .newsletter #email-box {
        width: 280px;
    }
    
    .newsletter .btn {
        padding: 12px 34px;
        font-weight: 500;
        text-transform: uppercase;
    }
    
    .footer {
        background: ${colors.primary};
        color: ${colors.secondary};
        border-radius: 5rem 0 0 0;
        padding: 2rem 0;
    }
    
    .footer-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 2rem;
        padding: 0 20px;
        justify-items: center;
    }
    
    .footer-container h2 {
        font-size: ${fonts.heading};
        font-weight: 500;
        text-align: center;
    }
    
    .footer-box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .footer-box h3 {
        margin-bottom: 1rem;
        font-size: ${fonts.subHeading};
        font-weight: 400;
        text-align: center;
    }
    
    .footer-box a {
        font-size: ${fonts.body};
        color: ${colors.secondary};
        font-weight: 400;
        margin-bottom: 0.5rem;
        text-align: center;
    }
    
    .footer-box a:hover {
        color: ${colors.linkHover};
    }
    
    .social {
        display: flex;
        justify-content: center;
    }
    
    .social a {
        font-size: 21px;
        margin-right: 1rem;
        color: ${colors.secondary};
    }
    
    .social a:hover {
        color: ${colors.socialHover};
    }
    
    .direitos {
        padding: 14px;
        text-align: center;
        color: ${colors.secondary};
        background: ${colors.primary};
        font-size: 0.7rem;
    }
`;