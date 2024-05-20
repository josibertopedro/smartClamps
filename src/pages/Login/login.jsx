import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import '../Login/login.css';

function LoginForm() {
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
          setAlert({ type: 'error', message: 'Erro ao fazer login: Usuário não encontrado.' });

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
        <img src={logo} className="logo-sheet" alt="logo" />
      </div>

      <div className="circle-container-2">
        <div className="circle-2"></div>
      </div>

      <div className="form-container"> 
        <input
          type="email"
          placeholder="Email"
          className="input-field-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FaUser className="icon" />

        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            className="input-field-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>

        <button className="login-button" onClick={handleSignIn}>
          Acessar
        </button>

        <div className="margin">
          Esqueceu a senha?
          <Link to="/recuperacao" className="link-underline">
          Recuperar agora
          </Link> 
        </div>
      </div>
    </div>
      
      <div className="circle-container">
        <div className="circle"></div>
      </div>

      <div className="footer-text">
        Deseja adquirir uma conta?
        <Link to="/suporte" className='link-underline'>
        Contacte nosso suporte.
        </Link>
      </div>
    </div> 
  ); 
}

export default LoginForm;
