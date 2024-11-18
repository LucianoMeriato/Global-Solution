import SolucaoStyle from "../css/SolucaoStyle";
import solucao from '../assets/about-img.jpg';

const Solucao = () => {
  return (
    <SolucaoStyle id="solucao">
      <img className="solucao-img" src={solucao} alt="Imagem da solução IoT" />
      <div className="solucao-text">
        <span>Para um Consumo Eficiente</span>
        <h2>Nossas Soluções</h2>
        <p>
          Oferecemos um dispositivo inteligente que monitora o consumo de energia
          e um software de análise avançada que utiliza IA para sugerir ações que
          otimizam o uso energético e reduzem custos.
        </p>
        <h4>Análise e Previsão de Consumo:</h4>
        <p>
          - O sistema coleta e processa dados de consumo energético, gerando
          relatórios e previsões para ajudar na gestão de energia.
        </p>
        <h4>Inteligência Artificial:</h4>
        <p>
          - Com IA, nosso software identifica padrões de consumo e sugere mudanças
          para reduzir o desperdício de energia.
        </p>
        <h4>Ferramentas de Otimização:</h4>
        <p>
          - O sistema fornece recomendações personalizadas para cada perfil de
          usuário, promovendo um consumo mais inteligente.
        </p>
      </div>
    </SolucaoStyle>
  );
};

export default Solucao;
