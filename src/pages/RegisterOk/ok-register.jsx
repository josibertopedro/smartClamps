import React from "react"
import Logo from "../../assets/SmartLogo.png"
import Logo2 from "../../assets/Logo.jpg"
import './ok-register.css'


function Ok() {
    return (
        <div class="container">
            <div class="header">
                <div class="logo">
                    <img src={Logo} alt="SmartClamps Logo" />
                </div>
                <h1></h1>
                <div class="additional-image">
                </div>
            </div>
            <div class="message">
                <div class="checkmark">

                </div>
                <p>CADASTRO REALIZADO COM SUCESSO</p>
                <button onclick="window.history.back();">Retornar</button>
            </div>
        </div>
    )
}

export default Ok;
