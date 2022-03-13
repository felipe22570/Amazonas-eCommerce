import { typesProducto } from "../../redux/types/types";

describe("Verificar types", () => {
   test("Comparar objetos", () => {
      expect(typesProducto).toEqual({
         agregarProducto: "agregarProducto",
         listarProducto: "listarProducto",
         editarProducto: "editarProducto",
         eliminarProducto: "eliminarProducto",
         buscarProducto: "buscarProducto",
      });
   });
});
