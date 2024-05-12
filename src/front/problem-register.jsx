import React from "react"
import Logo from "./imagens/SmartLogo.png"
import './css/problem-register.css'
export default function Problem() {
    return (
    <div class="container">
    <div class="header">
        <div class="logo">
            <img src={Logo} alt="SmartClamps Logo"/>
        </div>

        <div class="additional-image">
            <img src="icone-variado-de-renderizacao-3d_360064-210.avif" alt=""/>
        </div>
    </div>
    <div class="message">
        <div class="checkmark">
            
        </div>
        <p>HOUVE UM ERRO NA TENTATIVA DE CADASTRO</p>
        <button className="button" onclick={() => window.history.back()}>Retornar</button>
    </div>
</div>
)
}