import { typesProducto } from "../types/types";

const initialState = {
   buscado: [],
};

export const buscadoReducers = (state = initialState, action) => {
   switch (action.type) {
      case typesProducto.buscar:
         return {
            ...state,
            buscado: [...action.payload],
         };

      default:
         return state;
   }
};
