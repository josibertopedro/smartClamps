import React from 'react';
import SmartClampLogo from '../../assets/SmartClamp-Logo.png';
import '../Procedure/procedimento.css';

function Procedimento() {
    return (
        <div className="container">
            <div className="header">
                <span className="back-arrow" onClick={() => window.history.back()}>←</span>
                <div className="title">Detalhes do registro</div>
                <img src={SmartClampLogo} alt="Logo" className="logo-procedure" />
            </div>
            <div className="line"></div>
            <div className="procedure-container">
                <div className="procedure-info">
                    <h2>Informações do Procedimento</h2>
                    <p>Paciente: </p>
                    <p>Procedimento Médico(a) da Equipe: </p>
                    <p>Enfermeiro(a): </p>
                    <p>Instrumentador(a): </p>
                    <p>Circulante: </p>
                    <p>Data e Hora do Início: </p>
                    <p>Duração: </p>
                    <p>O procedimento Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis risus nec mollis luctus. Praesent a nibh non dui venenatis venenatis quis vitae neque. Quisque non luctus urna. Donec luctus magna arcu, et porta nisl dignissim sed. Donec ac libero lectus. Donec eleifend feugiat convallis. Duis dignissim quis quam sed mattis. Aliquam ac nulla luctus,</p>
                </div>
            </div>
            <div className="photos-container">
                <div className="photo-container">
                    <img src="pinças 2.png" alt="Foto 1" className="photo" />
                    <div className="text-container">
                        <p>CONTAGEM INICIAL: 80</p>
                        <p>HORA DO REGISTRO: 21:12</p>
                    </div>
                    <div className="button-container">
                        <button className="button blue-button">Baixar Registro</button>
                    </div>
                </div>
                <div className="photo-container">
                    <img src="bandage-operation-tools-bloody-hospital-46755647 3.png" alt="Foto 1" className="photo" />
                    <div className="text-container">
                        <p>CONTAGEM FINAL: 79</p>
                        <p>HORA DO REGISTRO: 22:36</p>
                    </div>
                    <div className="button-container">
                        <button className="button green-button">Validar Divergência</button>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="smartclamps-text">SmartClamps™</div>
        </div>
    );
}

export default Procedimento;
