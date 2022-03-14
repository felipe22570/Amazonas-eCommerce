import styled from "styled-components";

export const ContCarrito = styled.div`
   width: 90%;
   margin: 2rem auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1.5rem;

   .carrito-product {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin: auto;

      padding: 1rem 1.5rem 1rem 1.5rem;
      -webkit-box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.5);
      box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.5);

      img {
         width: 7rem;
      }

      .div-cant {
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 1rem;

         button {
            width: 3rem;
            font-size: 1.5rem;
            cursor: pointer;
         }
      }

      .eliminar {
         width: 4rem;
         padding: 0.3rem;
         border-radius: 5px;
         background-color: red;
         border: none;
         cursor: pointer;
      }
   }

   .pagar {
      width: 90%;
      margin-top: 4rem;
      display: flex;
      flex: auto;
      align-items: center;
      justify-content: center;
      gap: 10%;

      button {
         width: 10rem;
         height: 2.5rem;
         background-color: green;
         color: white;
         border: none;
         border-radius: 5px;
         cursor: pointer;
      }
   }
`;
