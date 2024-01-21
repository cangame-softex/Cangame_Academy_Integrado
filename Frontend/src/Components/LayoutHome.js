import React from "react";
import '../css/LayoutHome.css';
import { Link } from "react-router-dom";
import Logo from "../img/logoCangame.png";
import Container from "./Container";
import contrato from "../img/Contrat.jpg"
import licenças from "../img/License.jpg"
import Controle from "../img/Control.jpg"

const LayoutHome = ({children}) => {
    return(
      <Container>
          <div className="layout-container">
          <header className="header">
            <img src={Logo} alt="Logo" className="logo" />
            <h1>Cangame Edu - Administrativo</h1>
          </header>

          <section className="home_container">
            <Link to="/formulario">
            <div className="imagem">
            <img src={contrato} alt="Cadastro de Contrato"/>
            <h3>Cadastro de Contrato</h3>
            </div>
            </Link>
            <Link to="/licença">
            <div className="imagem">
            <img src={licenças} alt="Cadastro de Licenças" />
            <h3>Cadastro de Licença</h3>
            </div>
            </Link>
            <Link to="/license-table">
            <div className="imagem">
            <img src={Controle} alt="Controle de Licenças" />
            <h3>Controle de Licenças</h3>
            </div>
            </Link>
            {children}
          </section>

          <footer className="footer">
            <p> Copyright 2023 - Softex - Cangame</p>
          </footer>
        </div>
      </Container>
    );
}

export default LayoutHome;