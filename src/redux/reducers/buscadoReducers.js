import { typesProducto } from "../types/types";

const initialState = {
   buscado: [],
};

export const buscadoReducers = (state = initialState, action) => {
   switch (action.type) {
      case typesProducto.buscarProducto:
         return {
            ...state,
            buscado: [...action.payload],
         };

      default:
         return state;
   }
};
