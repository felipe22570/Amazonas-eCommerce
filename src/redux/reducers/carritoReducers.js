import { typesCarrito } from "../types/types";

const initialState = {
   carrito: [],
};

export const carritoReducers = (state = initialState, action) => {
   switch (action.type) {
      case typesCarrito.agregarCarrito:
         return {
            carrito: [action.payload],
         };

      case typesCarrito.listarCarrito:
         return {
            carrito: [...action.payload],
         };

      case typesCarrito.editarCarrito:
         return {
            ...state,
         };

      case typesCarrito.eliminarCarrito:
         return {
            products: state.carrito.filter((pro) => pro.codigo !== action.payload),
         };

      default:
         return state;
   }
};
