import { FooterStyle } from "../css/FooterStyle";

const Footer = () => {
    return (
        <FooterStyle>

            <section className="newsletter container">
                <h2>Entre em contato</h2>
                <form action="">
                    <input type="email" id="email-box" placeholder="seuemail@gmail.com" required />
                    <input type="submit" value="Enviar" className="btn" />
                </form>
            </section>

       
            <section className="footer">
                <div className="footer-container container">
                    <h2>Energy clean</h2>
                    <div className="footer-box">
                        <h3>Contato</h3>
                        <a href="mailto:cleanenergy@energy.com">cleanenergy@energy.com</a>
                        <a href="tel:+11000000000">+11 00000-0000</a>
                    </div>
                    <div className="footer-box">
                        <h3>Endereço</h3>
                        <a href="#">Av. Paulista, São Paulo.</a>
                    </div>
                    <div className="social">
                        <h3>Links</h3>
                        <a href="#"><i className="bx bxl-instagram"></i></a>
                        <a href="#"><i className="bx bxl-facebook"></i></a>
                        <a href="#"><i className="bx bxl-twitter"></i></a>
                    </div>
                </div>
            </section>

      
            <div className="direitos">
                <p>&copy; 2024 - Todos os direitos reservados</p>
            </div>
        </FooterStyle>
    );
};

export default Footer;