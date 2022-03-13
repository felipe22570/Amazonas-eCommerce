import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   editarCarritoAsyn,
   eliminarCarritoAsyn,
   listarCarritoAsync,
} from "../redux/actions/actionsCarrito";
import { ContCarrito } from "../styles/carritoStyles";
import NavBar from "./NavBar";

const Carrito = () => {
   const dispatch = useDispatch();
   const { carrito } = useSelector((store) => store.carrito);
   const { products } = useSelector((store) => store.productos);

   const [precioTotal, setPrecioTotal] = useState("");

   const aumentar = (elemento) => {
      const [valorInicial] = products.filter((p) => p.codigo === elemento.codigo);

      const precioInicial = Number(valorInicial.precio);

      const newProduct = elemento;

      newProduct.cant = newProduct.cant + 1;
      newProduct.precio = precioInicial * newProduct.cant;

      dispatch(editarCarritoAsyn(newProduct.codigo, newProduct));
   };

   const disminuir = (elemento) => {
      const [valorInicial] = products.filter((p) => p.codigo === elemento.codigo);

      const precioInicial = Number(valorInicial.precio);

      const newProduct = elemento;

      newProduct.cant = newProduct.cant - 1;
      newProduct.precio = precioInicial * newProduct.cant;

      dispatch(editarCarritoAsyn(newProduct.codigo, newProduct));
   };

   useEffect(() => {
      dispatch(listarCarritoAsync());

      let element = 0;

      carrito.forEach((elem) => {
         element = Number(element) + Number(elem.precio);
      });

      setPrecioTotal(element);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [carrito]);

   return (
      <>
         <NavBar />
         <ContCarrito>
            <h2>Productos agregados al carrito:</h2>

            {carrito.map((c, index) => (
               <div className="carrito-product" key={index}>
                  <img src={c.imagen} alt="" />
                  <span>{c.nombre}</span>
                  <div className="div-cant">
                     <button onClick={() => disminuir(c)}>-</button>
                     <span>{c.cant}</span>
                     <button onClick={() => aumentar(c)}>+</button>
                  </div>
                  <span style={{ color: "#AF2913" }}>
                     <b>$ {c.precio}</b>
                  </span>
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        dispatch(eliminarCarritoAsyn(c.codigo));
                     }}
                  >
                     Eliminar
                  </button>
               </div>
            ))}

            <h1>Precio total: {precioTotal}</h1>
         </ContCarrito>
      </>
   );
};

export default Carrito;
