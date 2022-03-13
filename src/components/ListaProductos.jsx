import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Categorias, ContLista, Listado } from "../styles/listaStyles";
import Footer from "./Footer";
import NavBar from "./NavBar";

const ListaProductos = () => {
   const { products } = useSelector((store) => store.productos);

   const televisores = products.filter((u) => u.categoria === "Televisores");
   const celulares = products.filter((u) => u.categoria === "Celulares");
   const camaras = products.filter((u) => u.categoria === "Camaras");

   const [objeto, setObjeto] = useState(products);

   console.log(objeto);

   return (
      <>
         <NavBar />
         <ContLista>
            <Categorias>
               <div className="categoria" onClick={() => setObjeto(products)}>
                  Ver todo
               </div>
               <div className="categoria" onClick={() => setObjeto(televisores)}>
                  Televisores
               </div>
               <div className="categoria" onClick={() => setObjeto(celulares)}>
                  Celulares
               </div>
               <div className="categoria" onClick={() => setObjeto(camaras)}>
                  Cámaras
               </div>
            </Categorias>

            <Listado>
               {objeto.map((p, index) => (
                  <div key={index}>
                     <div className="card-product">
                        <div className="imagen">
                           <img src={p.image1} alt="" />
                        </div>
                        <h3>{p.nombre}</h3>
                        <span>$ {p.precio}</span>
                        <Link to={"/product/" + p.codigo}>
                           <button>Ver producto</button>
                        </Link>
                     </div>
                  </div>
               ))}
            </Listado>
         </ContLista>
         <Footer />
      </>
   );
};

export default ListaProductos;
