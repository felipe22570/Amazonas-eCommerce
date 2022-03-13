import styled from "styled-components";

export const ContProduct = styled.div`
   font-size: 0.85rem;
   display: flex;
   flex-direction: column;
   gap: 10vh;
   line-height: 1.5;
`;

export const ProductInfo = styled.div`
   width: 95%;
   margin: auto auto 10vh auto;
   display: grid;
   grid-template-columns: 3% 38% 38% 15%;
   gap: 2.5%;

   .thumbnails {
      display: flex;
      flex-direction: column;
      gap: 5%;

      img {
         border: 1px solid black;
         padding: 5px;
         width: 2.5rem;
         cursor: pointer;
      }
   }

   .image {
      img {
         width: 100%;
      }
   }

   .details {
      display: flex;
      flex-direction: column;
      gap: 6vh;
   }

   .details__precio {
      display: flex;
      flex-direction: column;
      gap: 2vh;
      text-decoration: none;
   }

   .details__precio__head {
      display: flex;
      gap: 3%;
      text-decoration: none;
   }

   .details__precio__about {
      display: flex;
      flex-direction: column;
      gap: 2vh;
   }

   .details__about {
      display: flex;
      flex-direction: column;
      gap: 2vh;
   }

   .buy {
      border: 0.5px solid black;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      gap: 3vh;
      height: fit-content;
      padding: 3%;
      padding-bottom: 5%;

      button {
         height: 5vh;
         border: none;
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 5%;
      }
   }
`;

export const ProductsRelacionados = styled.div`
   width: 95%;
   margin: auto;
   display: flex;
   flex-direction: column;

   .cards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
   }
`;

export const Card = styled.div`
   padding: 2%;
   display: flex;
   flex-direction: column;
   gap: 4vh;
   width: 10rem;
`;

export const ProductComments = styled.div`
   width: 95%;
   margin: auto;
   display: flex;
   flex-direction: column;
   gap: 6vh;
`;

export const Comment = styled.div`
   display: flex;
   flex-direction: column;
   gap: 4vh;
   width: 50%;
   font-size: 0.8rem;

   .comment-user {
      display: flex;
      align-items: center;
      gap: 1rem;

      img {
         width: 4rem;
         border-radius: 100px;
      }
   }

   .comment-body {
      display: flex;
      flex-direction: column;
   }

   .comment-foot {
      display: flex;
      flex-direction: column;
      opacity: 0.8;
   }
`;
