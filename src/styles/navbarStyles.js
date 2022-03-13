import styled from "styled-components";

export const Contenedor = styled.div`
   position: relative;
   top: 0;
`;

export const ContNavbar = styled.div`
   width: 100%;
   height: 10vh;
   background-color: black;
   color: white;
   font-size: 0.8rem;
   display: flex;
   align-items: center;
   gap: 3%;

   .box-login {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      padding: 3%;

      button {
         width: 10rem;
         height: 30px;
         background-color: #f0ad64;
         border: none;
         font-weight: 700;
         cursor: pointer;
      }
   }

   .hidden {
      display: none;
   }
`;

export const NavUbicacion = styled.div`
   display: flex;
   gap: 3px;
   align-items: flex-end;

   img {
      width: 1.3rem;
   }

   .saludo {
      font-weight: 300;
   }

   .ubicacion {
      display: flex;
      flex-direction: column;
      gap: 2px;
      font-weight: 700;
   }
`;

export const NavForm = styled.form`
   display: flex;

   select {
      border: none;
      padding: 1%;
   }

   input {
      border: none;
      padding: 1%;
      width: 25rem;
   }

   button {
      background-color: #f0ad64;
      border: none;
      padding: 1% 2% 1% 2%;
   }
`;

export const NavCuenta = styled.div`
   display: flex;
   flex-direction: column;
   cursor: pointer;

   span {
      cursor: pointer;
   }
`;

export const NavCarrito = styled.div`
   display: flex;
   align-items: flex-end;
   color: white !important;
`;

export const SecNavbar = styled.div`
   width: 100%;
   height: 5vh;
   background-color: #242f3e;
   color: white;
   display: flex;
   align-items: center;
   gap: 3%;
   font-size: 0.7rem;
   font-weight: 500;

   .todo {
      display: flex;
      align-items: center;
      gap: 2%;
      margin-left: 2%;
   }
`;
