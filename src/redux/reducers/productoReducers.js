import { typesProducto } from "../types/types";

const initialState = {
   productos: [],
   buscado: [],
};

export const productoReducer = (state = initialState, action) => {
   switch (action.type) {
      case typesProducto.agregarProducto:
         return {
            productos: [action.payload],
         };

      case typesProducto.listarProducto:
         return {
            products: [...action.payload],
         };

      case typesProducto.editarProducto:
         return {
            ...state,
         };

      default:
         return state;
   }
};
