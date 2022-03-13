import { Box, ClickAwayListener } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAsync } from "../redux/actions/actionsLogin";
import { buscarAsyn, listarAsync } from "../redux/actions/actionsProducto";
import {
   Contenedor,
   ContNavbar,
   NavCarrito,
   NavCuenta,
   NavForm,
   NavUbicacion,
   SecNavbar,
} from "../styles/navbarStyles";

const NavBar = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const formik = useFormik({
      initialValues: {
         nombre: "",
      },
      onSubmit: (data) => {
         const { nombre } = data;

         console.log(nombre);
         dispatch(buscarAsyn(nombre));
         navigate("/search/" + nombre);
      },
   });

   const user = useSelector((store) => store.login);
   const [usuario, setUsuario] = useState("identificate");
   const [containerLogin, setContainerLogin] = useState("box-login");
   const [containerLogout, setContainerLogout] = useState("hidden");

   const handleLogout = () => {
      dispatch(logoutAsync());
   };

   const [open, setOpen] = useState(false);

   const handleClick = () => {
      setOpen((prev) => !prev);
   };

   const handleClickAway = () => {
      setOpen(false);
   };

   const styles = {
      position: "absolute",
      top: 30,
      right: 0,
      left: -150,
      zIndex: 1,
      width: "350px",
      border: "1px solid",
      color: "black",
      p: 1,
      bgcolor: "background.paper",
   };

   useEffect(() => {
      // const auth = getAuth();

      dispatch(listarAsync());

      const verificarUsuario = () => {
         if (Object.keys(user).length !== 0) {
            setUsuario(user.name);
            setContainerLogin("hidden");
            setContainerLogout("box-login");
         } else {
            setUsuario("Identificate");
         }
      };
      verificarUsuario();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [user]);

   return (
      <Contenedor>
         <ContNavbar>
            <Link to="/">
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1646255888/amazonas_tngpkv.png"
                  alt=""
               />
            </Link>
            <NavUbicacion>
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1646256217/gps_x86n31.png"
                  alt=""
               />
               <div className="ubicacion">
                  <span className="saludo">Hola</span>
                  <span>Elige tu dirección</span>
               </div>
            </NavUbicacion>

            <NavForm onSubmit={formik.handleSubmit}>
               <select name="departamento" id="">
                  <option>Todos los departamentos</option>
                  <option value="antioquia">Antioquia</option>
                  <option value="cundinamarca">Cundinamarca</option>
               </select>
               <input type="text" name="nombre" onChange={formik.handleChange} />
               <button type="submit">
                  <img
                     src="https://res.cloudinary.com/dcane9asx/image/upload/v1646257235/search_a8sset.png"
                     alt=""
                  />
               </button>
            </NavForm>

            <ClickAwayListener onClickAway={handleClickAway}>
               <Box sx={{ position: "relative" }}>
                  <NavCuenta onClick={handleClick}>
                     <span style={{ fontWeight: 300, fontSize: "0.7rem" }}>Hola, {usuario}</span>
                     <span style={{ fontWeight: 700 }}>Cuenta y listas</span>
                  </NavCuenta>
                  {open ? (
                     <Box sx={styles}>
                        <div className={containerLogin}>
                           <Link to="/login">
                              <button>Identificate</button>
                           </Link>

                           <p>
                              Eres un cliente nuevo? <Link to="/registro">Empieza aqui</Link>
                           </p>
                        </div>
                        <div className={containerLogout}>
                           <button onClick={handleLogout}>Salir</button>
                        </div>
                     </Box>
                  ) : null}
               </Box>
            </ClickAwayListener>

            <NavCuenta>
               <span style={{ fontWeight: 300, fontSize: "0.7rem" }}>Devoluciones</span>
               <span style={{ fontWeight: 700 }}>Y pedidos</span>
            </NavCuenta>

            <NavCarrito>
               <Link to="/shoppingcart" style={{ textDecoration: "none", color: "white" }}>
                  <img
                     src="https://res.cloudinary.com/dcane9asx/image/upload/v1646258805/shopping-cart_w6tgkm.png"
                     alt=""
                  />
                  <span>Carrito</span>
               </Link>
            </NavCarrito>
         </ContNavbar>
         <SecNavbar>
            <div className="todo">
               <img
                  src="https://res.cloudinary.com/dcane9asx/image/upload/v1646260447/menu_kx1okr.png"
                  alt=""
               />
               <span>Todo</span>
            </div>
            <span>Tarjetas de regalo</span>
            <span>Prime</span>
            <span>Los Más Vendidos</span>
            <span>AmazonBasics</span>
            <span>Cómputo y tabletas</span>
            <span>Los más regalados</span>
         </SecNavbar>
      </Contenedor>
   );
};

export default NavBar;
