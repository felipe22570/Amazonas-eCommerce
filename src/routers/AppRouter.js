import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AgregarProduct from "../components/AgregarProduct";
import Carrito from "../components/Carrito";
import ListaBuscados from "../components/ListaBuscados";
import ListaProductos from "../components/ListaProductos";
import Login from "../components/Login";
import Main from "../components/Main";
import Product from "../components/Product";
import Registro from "../components/Registro";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [checking, setChecking] = useState(false);

   useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         if (user?.uid) {
            setIsLoggedIn(true);
         } else {
            setIsLoggedIn(false);
         }
         setChecking(false);
      });
   }, []);
   if (checking) {
      return <h1>Espere...</h1>;
   }

   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/login"
               element={
                  <PublicRoutes isAuthenticated={isLoggedIn}>
                     <Login />
                  </PublicRoutes>
               }
            />
            <Route
               path="/registro"
               element={
                  <PublicRoutes isAuthenticated={isLoggedIn}>
                     <Registro />
                  </PublicRoutes>
               }
            />

            <Route
               path="/shoppingcart"
               element={
                  <PrivateRoutes isAuthenticated={isLoggedIn}>
                     <Carrito />
                  </PrivateRoutes>
               }
            />

            <Route path="/" element={<Main />} />

            <Route path="/product/:producto" element={<Product />} />
            <Route path="/agregar" element={<AgregarProduct />} />
            <Route path="/listado" element={<ListaProductos />} />
            <Route path="/search/:element" element={<ListaBuscados />} />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRouter;
