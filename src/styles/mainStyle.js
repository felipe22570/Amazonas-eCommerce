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
         /* border: 2px solid lightgray; */
         -webkit-box-shadow: 4px 5px 11px 3px rgba(0, 0, 0, 0.34);
         box-shadow: 4px 5px 11px 3px rgba(0, 0, 0, 0.34);
         border-radius: 10px;
         width: 18rem;
         height: 18rem;
         display: flex;
         justify-content: center;
         align-items: center;
         color: black;

         &:hover {
            background-color: #f0ad64;

            color: white !important;
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
         }

         h2 {
            text-decoration: none !important;
         }
      }
   }
`;
