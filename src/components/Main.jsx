import React from "react";
import { Link } from "react-router-dom";
import { ContMain } from "../styles/mainStyle";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Main = () => {
   return (
      <ContMain>
         <NavBar />
         <div className="imagen"></div>
         <div className="main-categorias">
            <Link to="/agregar" style={{ textDecoration: "none" }}>
               <div>
                  <h2>Agregar un producto</h2>
               </div>
            </Link>
            <Link to="/listado" style={{ textDecoration: "none" }}>
               <div>
                  <h2>Ver productos</h2>
               </div>
            </Link>
         </div>
         <Footer />
      </ContMain>
   );
};

export default Main;
