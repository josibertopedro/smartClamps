import React from 'react';
import { FaUser, FaBook, FaFileAlt, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

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
      <nav className="navbar">
        <div className="logo">
          <img src="/logo" alt="Logo" />
        </div>
        <div className="login-icon">
          <FaUser />
        </div>
        <div className="buttons">
          <button className="button">Cadastro</button>
          <button className="button">Relatórios</button>
          <button className="button" onClick={handleTutorialsClick}>
            <FaBook /> Tutoriais
          </button>
          <button className="link">Sem saber para onde ir? Acesse</button>
        </div>
        <div className="support-link">
          <button className="link">Suporte</button>
        </div>
        <div className="logout-button">
          <button className="button" onClick={handleLogout}><FaSignOutAlt />Sair</button>
        </div>
      </nav>
      <footer className="footer">
        <span className="footer-text">SmartClamps</span>
      </footer>
    </>
  );
}
