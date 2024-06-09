import React from "react";
import Vector from '../../assets/Vector.png';
import '../Profile/profile.css';
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";


function Profile() {
    return (
        <>
            <HeaderContainer />
            <div className="container-profile">
                
                    <form action="#" className="form-container-profile" method="POST">
                        <div className="form-group-profile">
                            <div className="photo-upload-profile">
                                <input type="file" id="photo" name="photo" accept="image/*"
                                    style={{ display: 'none' }} />
                                <label htmlFor="photo">
                                    <img id="profile-pic" src={Vector} alt="Foto" />
                                </label>
                            </div>
                        </div>
                    <div className="profile-fields">
                        <div className="form-group-profile">
                            <label htmlFor="first_name">Nome:</label>

                            <input type="text" id="first_name" name="first_name"
                                className="campoComposto1" placeholder="Primeiro nome" required />

                            <input type="text" id="last_name" name="last_name"
                                className="campoComposto2" placeholder="Sobrenome" required />
                        </div>
                        <div className="form-group-profile">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group-profile">
                            <label htmlFor="cpf">CPF:</label>
                            <input type="number" id="cpf" name="cpf" required />
                        </div>
                        <div className="form-group-profile">
                            <label htmlFor="sector">Setor:</label>
                            <select id="sector" name="sector" required>
                                <option value="">Selecione</option>
                                <option value="scemergency">Centro Cirúrgico Emergência</option>
                                <option value="scelective">Centro Cirúrgico Eletivo</option>
                            </select>
                        </div>
                        <div className="form-group-profile">
                            <label htmlFor="position">Cargo:</label>
                           
                            <select id="position" name="position" required>
                                <option value="">Selecione</option>
                                <option value="scemergency">Médico(a)</option>
                                <option value="scelective">Enfermeiro(a)</option>
                            </select>
                        </div> 

                        </div>
                        <div className="edit-password-profile">
                            <button type="button" className="edit-password">Editar Senha</button>
                        </div>
                        <div className="form-group-profile">
                            <button type="submit" className="button-profile">Enviar</button>
                        </div>
                    </form>
            </div>
        </>
    );
}

export default Profile;
