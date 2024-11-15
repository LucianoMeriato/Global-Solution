import { HomeStyle } from "../css/HomeStyle";
import aboutImage from '../assets/about-img.jpg';
import Shape from '../assets/AbstractShape.png';
import compartilhe from '../assets/compartilhee.jpg';
import header from '../assets/header.png';
import jogar from '../assets/jogar.jpg';
import logo from '../assets/logo-e.png';
import solucao from '../assets/solucao-img.png';

const Home = () => {
    return (
        <HomeStyle>
            {/* Seção inicial */}
            <section className="home container" id="home">
                <div className="home-text">
                    <h1>Inovação para um<br />Consumo Energético<br />Inteligente</h1>
                    <a href="#" className="btn">Saiba Mais</a>
                </div>
            </section>

            {/* Seção sobre */}
            <section className="about container" id="about">
                <div className="about-img">
                    <img src={aboutImage} alt="Imagem sobre consumo inteligente" />
                </div>
                <div className="about-text">
                    <span>Sobre</span>
                    <h2>Monitoramento e Previsão de <br />Consumo Energético</h2>
                    <p>Nosso projeto utiliza a tecnologia IoT para monitorar e analisar o consumo de energia em tempo real, oferecendo insights e previsões que auxiliam na redução de gastos e na promoção de um uso mais eficiente dos recursos energéticos.</p>
                    <ul>
                        <li>- Análise precisa dos dados de consumo energético.</li>
                        <li>- Geração de previsões sobre gastos futuros.</li>
                        <li>- Recomendações de otimização baseadas em IA.</li>
                        <li>- Ferramentas para reduzir o desperdício e melhorar a eficiência.</li>
                    </ul>
                    <a href="https://www.g20.org/pt-br/g20-social/grupos-de-engajamento/oceans-20" className="btn">Saiba Mais</a>
                </div>
            </section>

         
            <div className="grid-container">
                <div className="item2">Análise de consumo detalhada para identificar desperdícios.</div>
                <div className="grid-item item3">Previsão de gastos energéticos para planejamento financeiro.</div>
                <div className="item4">Uso de IA para fornecer recomendações de eficiência energética.</div>
                <div className="grid-item item5">Monitoramento em tempo real para ajustes imediatos.</div>
                <div className="item6">Tecnologia que promove a sustentabilidade e reduz o impacto ambiental.</div>
                <div className="grid-item item7">Inovação em IoT para um futuro mais eficiente.</div>
            </div>

                {/* Seção solucao */}
            <section className="about container">
                <div className="about-img2" id='solucao'> 
                    <img src={solucao} alt="Imagem da solução proposta" />
                </div>
                <div className="about-text2">
                    <span>Para um Consumo Eficiente</span>
                    <h2>Nossas Soluções</h2>
                    <p>Oferecemos um dispositivo inteligente que monitora o consumo de energia e um software de análise avançada que utiliza IA para sugerir ações que otimizam o uso energético e reduzem custos.</p>
                    <h4>Análise e Previsão de Consumo:</h4>
                    <p>- O sistema coleta e processa dados de consumo energético, gerando relatórios e previsões para ajudar na gestão de energia.</p>
                    <h4>Inteligência Artificial:</h4>
                    <p>- Com IA, nosso software identifica padrões de consumo e sugere mudanças para reduzir o desperdício de energia.</p>
                    <h4>Ferramentas de Otimização:</h4>
                    <p>- O sistema fornece recomendações personalizadas para cada perfil de usuário, promovendo um consumo mais inteligente.</p>
                </div>
            </section>

            
            <div className="section acoes container" >
                <div className="box">
                    <i className='bx bx-leaf'></i>
                    <h3>Eficiência Energética</h3>
                    <p>Promovemos o uso consciente e eficiente dos recursos energéticos.</p>
                </div>
                <div className="box">
                    <i className='bx bx-group'></i>
                    <h3>Comunidade Sustentável</h3>
                    <p>Interação e educação para um consumo energético mais responsável.</p>
                </div>
                <div className="box">
                    <i className='bx bx-bulb'></i>
                    <h3>Inovação e Tecnologia</h3>
                    <p>Aplicamos tecnologia avançada para monitorar e otimizar o consumo de energia.</p>
                </div>
            </div>

            
            <div className="sistema-recompensa">
                <h2>Conheça Também</h2>
                <p>Iniciativas que estão transformando a maneira como usamos a <br /><span> Energia.</span></p>
            </div>

         
            <div className="pontos-container container" id="Projetos">
                <div className="box">
                    <img src={compartilhe} alt="Pessoa acessando o site" />
                    <h3>Energia Solar no Minha Casa, Minha Vida</h3>
                    <div className="conteudo">
                        
                        <div className="icon">
                            <i className='bx bx-share-alt'></i>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img src={logo} alt="Logotipo do aplicativo" />
                    <h3>Real-Time Electricity Tracker</h3>
                    <div className="conteudo">
                       
                        <div className="icon">
                            <i className='bx bx-download'></i>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img src={jogar} alt="Imagem do simulador de consumo energético" />
                    <h3>INFINITY</h3>
                    <div className="conteudo">
                        
                        <div className="icon">
                            <i className='bx bx-wind'></i>
                        </div>
                    </div>
                </div>
            </div>
        </HomeStyle>
    );
};

export default Home;
