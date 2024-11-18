import { SobreStyle } from "../css/SobreStyle";

const Sobre = () => {
    return (
        <SobreStyle>
            <section className="sobre container" id="sobre">
                <div>
                    <h1>O que é Energia Limpa?</h1>
                    <p>
                        A energia limpa refere-se à energia que é gerada a partir de fontes renováveis, como o sol, vento, água e biomassa, e que não emite gases de efeito estufa nem outros poluentes durante sua geração.
                    </p>
                </div>
            </section>

            <section className="container" id="solucao">
                <h2>Soluções Inteligentes para Energia Limpa</h2>
                <p>
                    Com o avanço da tecnologia, a produção e o consumo de energia limpa estão cada vez mais acessíveis e eficientes. O uso de IoT e inteligência artificial pode otimizar a forma como utilizamos e gerenciamos a energia.
                </p>
            </section>

            <div className="acoes container">
                <div className="box">
                    <h3>Transição Energética Justa</h3>
                    <p>A transição para fontes de energia limpa deve ser justa, garantindo que todos tenham acesso a soluções sustentáveis.</p>
                </div>
                <div className="box">
                    <h3>Preservação do Meio Ambiente</h3>
                    <p>A adoção de energia limpa é essencial para a preservação dos recursos naturais e para combater os efeitos das mudanças climáticas.</p>
                </div>
                <div className="box">
                    <h3>Promoção da Energia Solar</h3>
                    <p>A energia solar é uma das alternativas mais acessíveis e promissoras, permitindo reduzir os custos e promover a sustentabilidade.</p>
                </div>
            </div>
        </SobreStyle>
    );
};

export default Sobre;
