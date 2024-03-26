import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../back/routes/route';
import { Link } from 'react-router-dom';
import Apresentacao from './apresentacao';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const handleSignIn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
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
        <input type="email" placeholder="Email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="login-button" onClick={handleSignIn}>Acessar</button>
        <div className="forgot-password">
          <Link to={Apresentacao}>Esqueci a senha</Link>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container-2'>
          <div className='circle-2'></div>
        </div>
      </div>
      <div className="footer-text">
        Não tem uma conta? <a href="/src/front/apresentacao.jsx">Toque aqui</a> e saiba como adquirir uma.
      </div>
    </div>
  );
}
