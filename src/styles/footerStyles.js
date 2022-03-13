import styled from "styled-components";

export const ContFooter = styled.div`
   background-color: #242f3e;
   color: white;
   width: 100%;
   height: 60vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 0.8rem;
   font-weight: 300;
   gap: 10vh;
   flex: auto;
   margin-top: 11rem;

   img {
      background-color: #242f3e;
   }

   .menu {
      display: flex;
      justify-content: center;
      width: 100%;
      gap: 7%;
   }

   .texto {
      display: flex;
      flex-direction: column;
      gap: 5%;
   }

   .titulo {
      font-weight: 700;
   }
`;
