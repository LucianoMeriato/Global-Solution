import styled from 'styled-components'

export const ErrorStyle =styled.section `

body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #333;
        }
        #error-container {
            text-align: center;
        }
        .error-code {
            font-size: 120px;
            margin: 0;
            color: #00c3ff;
            text-shadow: 2px 2px 0 #000;
        }
        .error-message {
            font-size: 24px;
            margin-bottom: 20px;
        }
        .error-description {
            font-size: 18px;
            margin-bottom: 30px;
        }
        .homepage-link {
            text-decoration: none;
            color: #fff;
            background-color: #333;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .homepage-link:hover {
            background-color: #00c3ff;
        }
        .social-icons {
            margin-top: 20px;
        }
        .social-icon {
            margin: 0 10px;
            font-size: 24px;
            color: #333;
            text-decoration: none;
            transition: color 0.3s;
        }
        .social-icon:hover {
            color: #00c3ff;
        }
    



`
