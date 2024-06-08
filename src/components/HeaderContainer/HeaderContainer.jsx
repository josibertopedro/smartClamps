import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";
import Logo from '../../assets/SmartLogo.png'
import '../HeaderContainer/HeaderContainer.css'

function HeaderContainer () {
    return (
    <div className="header-container">
      <Link to="/home" className="back-arrow">
      <RiArrowGoBackFill />
      </Link>
      <img src={Logo} alt="Logo" className="logo" /> 
    </div>
    )
}

export default HeaderContainer;
