import React, { useState } from 'react';
import './login.css';
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../back/routes/route';

export default function Apresentacao() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password); 
      const user = userCredential.user;
      console.log('Usuário criado:', user);
    } catch (error) {
      console.error('Erro ao criar usuário:', error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="./Logo.png" className='logo-sheet' />
      </div>
      <div className="form-container">
        <div className='circle-container-2'>
          <div className='circle-2'></div>
        </div>
        <input type="email" placeholder="Email" className="input-field" value={email} onChange={handleEmailChange} />
        <input type="password" placeholder="Senha" className="input-field" value={password} onChange={handlePasswordChange} />
        <button className="login-button" onClick={handleSubmit}>Acessar</button>
        <div className="forgot-password">
          <a href="#">jafasvha</a> {/* Alterado de <link> para <a> */}
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container-2'>
          <div className='circle-2'></div>
        </div>
      </div>
      <div className="footer-text">
        Não tem uma conta? <a href="/src/front/apresentacao.jsx">Toque aqui</a> e saiba como adquirir uma. {/* Corrigido o uso de <link> para <a> */}
      </div>
    </div>
  );
}
