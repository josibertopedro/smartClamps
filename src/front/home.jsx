import React from 'react';
import { FaUser, FaBook, FaFileAlt, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './css/home.css'
import Logo from './imagens/SmartLogo.png'
export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            
            navigate('/login');
          })
          .catch((error) => {
            
            console.error('Erro ao fazer logout:', error);
          });
      };

    const handleTutorialsClick = () => {
        
        navigate('/tutorial');
    };

  return (
    <>
    <div className="logo-icon-container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="login-icon">
          <FaUser className={"user-icon"} style={{ fontSize: "72px" }} />
        </div>
        <div className="line"></div>
      </div>
      <div className="logout-button">
          <button className="button" onClick={handleLogout}><FaSignOutAlt />Sair</button>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container-2'>
          <div className='circle-2'></div>
        </div>
      <nav className="navbar">
        <div className="buttons">
          <button className="button">Cadastro</button>
          <button className="button">Relatórios</button>
          <button className="button" onClick={handleTutorialsClick}>
            <FaBook /> Tutoriais
          </button>
          <p className="link">Sem saber para onde ir? Acesse</p>
        </div>
        <div className="support-link">
          <button className="button">Suporte</button>
        </div>
      </nav>
      <footer className="footer">
        <span className="footer-text">SmartClamps</span>
      </footer>
    </>
  );
}
