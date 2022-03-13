import styled from "styled-components";

export const ContCarrito = styled.div`
   width: 90%;
   margin: 2rem auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;

   .carrito-product {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin: auto;
      border: 1px solid black;
      padding: 1rem 1.5rem 1rem 1.5rem;

      img {
         width: 7rem;
      }

      .div-cant {
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 1rem;

         button {
            width: 4rem;
            font-size: 1.5rem;
         }
      }
   }
`;
