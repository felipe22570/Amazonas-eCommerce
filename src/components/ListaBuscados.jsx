import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Listado } from "../styles/listaStyles";
import Footer from "./Footer";
import NavBar from "./NavBar";

const ListaBuscados = () => {
   const { buscado } = useSelector((store) => store.buscado);
   const { element } = useParams();

   return (
      <>
         <NavBar />
         <h1 style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            Resultados de "{element}"
         </h1>
         <Listado style={{ width: "80%", margin: "50px auto" }}>
            {buscado.map((p, index) => (
               <div key={index}>
                  <div className="card-product">
                     <div className="imagen">
                        <img src={p.image1} alt="" />
                     </div>
                     <h3>{p.nombre}</h3>
                     <span>{p.precio}</span>
                     <Link to={"/product/" + p.codigo}>
                        <button>Ver producto</button>
                     </Link>
                  </div>
               </div>
            ))}
         </Listado>
         <Footer />
      </>
   );
};

export default ListaBuscados;
