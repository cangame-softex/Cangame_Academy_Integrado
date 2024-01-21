import React from "react";
import "../css/Layout.css";
import { Link } from "react-router-dom";
import Logo from "../img/logoCangame.png";
import { IoHome } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa6";
import { AiOutlineControl } from "react-icons/ai";


const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>Cangame Edu</h1>
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <Link to="/home">
            <button><IoHome />Home</button>
          </Link>
          <Link to="/formulario">
            <button><FaRegPenToSquare />Cadastro de Contrato</button>
          </Link>
          <Link to="/licença">
            <button><FaRegAddressBook />Cadastro de Licenças</button>
          </Link>
          <Link to="/license-table">
            <button><AiOutlineControl />Controle de Licenças</button>
          </Link>
        </aside>

        {children}
      </div>

      <footer className="footer">
        <p> Copyright 2023 - Softex - Cangame</p>
      </footer>
    </div>
  );
};

export default Layout;
