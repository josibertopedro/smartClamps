import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Suporte() {
  return (
    <div className="suporte-container">
      
      <div className="logo-container">
        <img src="./imagens/logo.png" className='logo-sheet' alt="logo" />
      </div>

      <label>
        Entre em contato por um de nossos canais, fale com um de nossos atendentes e esclareça suas possíveis dúvidas sobre o SmartClamps™ .
      </label>
      
      <div className="contact-container">
        <div className="contact-field">
          <FaPhone className="phone-icon" />
          <span>(XX) XXXX-XXXX</span>
        </div>

        <div className="contact-field">
          <FaWhatsapp className="whatsapp-icon" />
          <span>(XX) 9XXXX-XXXX</span>
        </div>
      </div>

      <div className="button-sair">
        <Link to="/login" className="top-left-button">Voltar para o Login</Link>
      </div>
    </div>
  );
}

export default Suporte;
