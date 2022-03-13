import styled from "styled-components";

export const ContMain = styled.div`
   display: flex;
   flex-direction: column;

   .imagen {
      background: url("https://res.cloudinary.com/dcane9asx/image/upload/v1646782089/images-sprint3-reto2/61IUQBqfQ1L._SX3000__hkwexj.jpg");
      background-size: cover;
      width: 100%;
      height: 14rem;
      margin: auto;
   }

   .main-categorias {
      margin-top: 4rem;
      display: flex;
      justify-content: center;
      gap: 10%;

      div {
         border: 1px solid black;
         width: 20rem;
         height: 20rem;
         display: flex;
         justify-content: center;
         align-items: center;

         h2 {
            text-decoration: none !important;
         }
      }
   }
`;
