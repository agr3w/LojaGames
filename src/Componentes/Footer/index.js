import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-links">
          <a href="#">Jogos PS5</a>
          <a href="#">Jogos PS4</a>
          <a href="#">Jogos Xbox Series</a>
          <a href="#">Usados PS3</a>
          <a href="#">Usados Xbox 360</a>
          <a href="#">Suporte ao Cliente</a>
        </div>
        <div className="store-address">
          <p>Endereço da Loja: Rua Exemplo, 123 - Cidade - Estado</p>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer-right">
      <div className="social-media">
          <a href="#" className="social-icon">
            <img src="/imgs/facebook.png" alt="Facebook" />
          </a>
          <a href="#" className="social-icon">
            <img src="/imgs/twitter.png" alt="Twitter" />
          </a>
          <a href="#" className="social-icon">
            <img src="/imgs/instagram.png" alt="Instagram" />
          </a>
          <a href="#" className="social-icon">
            <img src="/imgs/youtube.png" alt="YouTube" />
          </a>
        </div>
        <div className="trust-seals">
          <img src="/imgs/selo2.png" alt="Selo de confiança 2" />
          <img src="/imgs/selo3.png" alt="Selo de confiança 3" />
        </div>
        <p className="rights">Todos os direitos reservados © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
