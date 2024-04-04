import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './apresentacao.css';  

export default function Apresentacao() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="apresentacao-container-logo">
      <div className="imagem-container-logo">
        <img src="./imagens/logo.png" alt="logo" className="imagem" />
      </div>
      <div className="imagem-container-loading">
        <img src="./imagens/Loading.png" alt="load" className="imagem" />
      </div>
      
    </div>
  );
}
