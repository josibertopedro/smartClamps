import React from "react"
import logo from '../../assets/SmartClamp-Logo.png'
import Vector from '../../assets/Vector.png'
import '../Profile/profile.css'


function Profile() {
    return (
        <div className="container">
            <img className="logo" src={logo} alt="ogoL" />
            <div className="back-arrow">&#8592;</div>
            <div className="form-container-profile">
                <form action="#" method="POST">
                    <div className="form-group">
                        <div className="photo-upload">
                            <input type="file" id="photo" name="photo" accept="image/*" style={{ display: 'none' }} />
                            <label htmlFor="photo">
                                <img id="profile-pic" src={Vector} alt="Foto" />
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="first_name">Nome:</label>
                        <input type="text" id="first_name" name="first_name" placeholder="Primeiro nome" required />
                        <input type="text" id="last_name" name="last_name" placeholder="Sobrenome" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpf">CPF:</label>
                        <input type="number" id="cpf" name="cpf" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sector">Setor:</label>
                        <select id="sector" name="sector" required>
                            <option value="">Selecione</option>
                            <option value="finance">Financeiro</option>
                            <option value="hr">Recursos Humanos</option>
                            <option value="it">Tecnologia da Informação</option>
                            <option value="sales">Vendas</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Cargo:</label>
                        <input type="text" id="position" name="position" required />
                    </div>
                    <div className="edit-password">
                        <button type="button" className="edit-password">Editar Senha</button>
                    </div>
                    <div className="form-group">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile;
