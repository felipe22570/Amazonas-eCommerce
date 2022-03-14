import styled from "styled-components";

export const ContAgregar = styled.div`
   width: 100%;
   margin-top: 2rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 3rem;

   form {
      width: 40%;
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      input {
         height: 1.8rem;
         padding-left: 5px;
      }

      .input {
         display: flex;
         flex-direction: column;
         gap: 5px;
      }

      select {
         height: 1.8rem;
      }

      button {
         height: 2.5rem;
         font-size: 0.9rem;
         background-color: #f0ad64;
         border-radius: 5px;
         border: 1px solid lightgray;
         cursor: pointer;
      }
   }
`;
