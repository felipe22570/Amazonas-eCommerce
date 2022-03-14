import styled from "styled-components";

export const ContLista = styled.div`
   width: 95%;
   margin: auto;
   display: grid;
   grid-template-columns: 18% 72%;
   gap: 10%;
   margin-top: 35px;
`;

export const Categorias = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   border-right: 2px solid lightgray;

   .categoria {
      padding: 0.5rem 1rem 0.5rem 1rem;
      cursor: pointer;

      &:hover {
         transform: scale(1.1);
      }
   }
`;

export const Listado = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   gap: 5%;

   .card-product {
      width: 10rem;
      display: flex;
      flex-direction: column;
      gap: 15px;

      .imagen {
         width: 10rem;

         img {
            width: 100%;
         }
      }

      span {
         color: #af2913;
      }

      button {
         height: 2rem;
         background-color: #f0ad64;
         padding: 0.5rem 1rem 0.5rem 1rem;
         border: none;
         cursor: pointer;
      }
   }
`;
