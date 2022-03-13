import styled from "styled-components";

export const ContLogin = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-size: 0.85rem;
   gap: 5vh;
   margin-top: 2vh;

   .login {
      width: 25%;
      border: 0.5px solid black;
      padding: 2%;
      display: flex;
      flex-direction: column;
      gap: 4vh;

      h1 {
         font-weight: 500;
      }

      form {
         display: flex;
         flex-direction: column;
         gap: 3%;
         margin-bottom: 5%;

         input {
            height: 3vh;
            padding: 1.5%;
         }

         button {
            height: 7vh;

            background-color: #f0ad64;
            border: none;
            border-radius: 5px;
            font-weight: 500;
            cursor: pointer;
         }
      }

      .botones {
         display: flex;
         flex-direction: column;
         gap: 2vh;
      }

      .redes {
         height: 7vh;
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 2%;
         cursor: pointer;

         img {
            width: 1.2rem;
         }
      }
   }
`;
