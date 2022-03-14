import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
   editarCarritoAsyn,
   eliminarCarritoAsyn,
   listarCarritoAsync,
   vaciarCarritoAsync,
} from "../redux/actions/actionsCarrito";
import { ContCarrito } from "../styles/carritoStyles";
import NavBar from "./NavBar";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";

const Carrito = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
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

      if (newProduct.cant > 1) {
         newProduct.cant = newProduct.cant - 1;
         newProduct.precio = precioInicial * newProduct.cant;
      }

      dispatch(editarCarritoAsyn(newProduct.codigo, newProduct));
   };

   const sumarPrecios = () => {
      let element = 0;

      carrito.forEach((elem) => {
         element = Number(element) + Number(elem.precio);
      });

      setPrecioTotal(element);
   };

   const pagarCarrito = () => {
      if (Object.keys(carrito).length !== 0) {
         Swal.fire({
            title: "Pago realizado exitosamente!",
            icon: "success",
            confirmButtonText: "Continuar",
         });
         dispatch(vaciarCarritoAsync());
         navigate("/");
      } else {
         Swal.fire({
            title: "No hay productos en el carrito",
            icon: "warning",
            confirmButtonText: "Continuar",
         });
      }
   };

   useEffect(() => {
      dispatch(listarCarritoAsync());
      sumarPrecios();
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
                     className="eliminar"
                     onClick={(e) => {
                        e.preventDefault();
                        dispatch(eliminarCarritoAsyn(c.codigo));
                     }}
                  >
                     <DeleteIcon sx={{ color: "white" }} />
                  </button>
               </div>
            ))}

            <div className="pagar">
               <h3 className="precioTotal">
                  Precio total: <span style={{ color: "#AF2913" }}>$ {precioTotal}</span>
               </h3>
               <button onClick={() => pagarCarrito()}>Pagar</button>
            </div>
         </ContCarrito>
      </>
   );
};

export default Carrito;
