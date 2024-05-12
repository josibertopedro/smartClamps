import React from "react"
import Logo from "./imagens/SmartLogo.png"
import './css/ok-register.css'
import Logo2 from "./imagens/Logo.jpg"
export default function Ok () {
    return (
        <div class="container">
        <div class="header">
            <div class="logo">
                <img src={Logo}alt="SmartClamps Logo"/>
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