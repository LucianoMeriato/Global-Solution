import styled from "styled-components";
import solucao from "../assets/solucao-img.png";

export const SolucaoStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4rem 0;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 128, 128, 0.15);

  .solucao-img {
    width: 50%;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 128, 128, 0.3);
  }

  .solucao-text {
    width: 40%;
    text-align: left;

    span {
      font-size: 1.2rem;
      font-weight: 500;
      color: #008080;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    h2 {
      font-size: 2.5rem;
      margin: 1rem 0;
      color: #004d4d;
    }

    p {
      font-size: 1rem;
      color: #006666;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    h4 {
      font-size: 1.5rem;
      color: #007373;
      margin-top: 1.5rem;
    }

    ul {
      margin-top: 1rem;
      list-style: disc;
      padding-left: 20px;
      color: #004d4d;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;

    .solucao-img {
      width: 80%;
      margin-bottom: 2rem;
    }

    .solucao-text {
      width: 90%;
    }
  }
`;

export default SolucaoStyle;
