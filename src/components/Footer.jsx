import React from "react";
import { ContFooter } from "../styles/footerStyles";

const Footer = () => {
   return (
      <ContFooter>
         <div className="menu">
            <div className="texto">
               <span className="titulo">Conócenos</span>
               <br />
               <span>Trabajar en Amazon</span>
               <span>Informacion corporativa</span>
               <span>Departamento de prensa</span>
            </div>
            <div className="texto">
               <span className="titulo">Gana dinero con nosotros</span>
               <br />
               <span>Vender en Amazon</span>
               <span>Vender en Amazon Handmade</span>
               <span>Publica tu libro en Kindle</span>
               <span>Programa de afiliados</span>
               <span>Anuncia tus productos</span>
            </div>
            <div className="texto">
               <span className="titulo">Podemos ayudarte</span>
               <br />
               <span>Amazon y COVID-19</span>
               <span>Devolver o reemplazar productos</span>
               <span>Gestionar contenido y dispositivos</span>
               <span>Ayuda</span>
            </div>
            <div className="texto">
               <span className="titulo">Métodos de pago</span>
               <br />
               <span>Tarjetas de crédito y débito</span>
               <span>Tarjetas de regalo</span>
               <span>Meses sin intereses</span>
               <span>Amazon Cash</span>
               <span>Amazon recargable</span>
            </div>
         </div>
         <img
            src="https://res.cloudinary.com/dcane9asx/image/upload/v1646255888/amazonas_tngpkv.png"
            alt=""
         />
      </ContFooter>
   );
};

export default Footer;
