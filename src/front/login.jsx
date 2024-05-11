import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../back/routes/route';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './css/login.css'
import logo from './imagens/logo.png'

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate(); 

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential.user) {
          setAlert({ type: 'success', message: 'Login bem-sucedido!' });
          navigate('/home');
        } else {
          setAlert({ type: 'error', message: 'Erro ao fazer login: Usuário não autenticado.' });
          
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      })
      .catch((error) => {
        setAlert({ type: 'error', message: 'Erro ao fazer login: ' + error.message });
        
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignIn(e); 
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} className='logo-sheet' alt="logo" />
      </div>
      <div className="form-container">
        <div className='circle-container-2'>
          <div className='circle-2'></div>
        </div>
        <input type="email" placeholder="Email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="password-input-container">
          <input type={showPassword ? "text" : "password"} placeholder="Senha" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} onKeyPress={handleKeyPress} />
          <div className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />} 
          </div>
        </div>
        <button className="login-button" onClick={handleSignIn}>Acessar</button>
        <div className="forgot-password">
          <Link to="/recuperacao" className="recover-password-link">Recuperar senha</Link>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container-2'>
          <div className='circle-2'></div>
        </div>
      </div>
      {alert && (
        <div className={`alert ${alert.type}`}>
          <p>{alert.message}</p>
          <button onClick={() => setAlert(null)}>Fechar</button>
        </div>
      )}
      <div className="footer-text">
        em caso de dúvida <a href="/suporte">Toque aqui.</a> 
      </div>
    </div>
  );
}
