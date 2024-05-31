import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';


function Recuperacao() {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handleRecoverPassword = () => {
    if (email) {
      sendPasswordResetEmail(email)
        .then(() => {
          setAlert({ type: 'success', message: 'Email de recuperação enviado!' });
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        })
        .catch((error) => {
          setAlert({ type: 'error', message: 'Erro ao enviar email de recuperação: ' + error.message });
        });
    } else {
      setAlert({ type: 'error', message: 'Por favor, insira seu email para recuperar a senha!' });
    }
  };

  return (
    <div>
      <h3>Insira o e-mail de cadastro para que possamos lhe enviar o link de recuperação da sua senha.</h3>
      <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleRecoverPassword}>Recuperar</button>
      {alert && (
        <div className={`alert ${alert.type}`}>
          <p>{alert.message}</p>
        </div>
      )}
    </div>
  );
}

export default Recuperacao;
