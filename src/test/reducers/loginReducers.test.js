import { loginReducer } from "../../redux/reducers/loginReducers";
import { typesLogin } from "../../redux/types/types";

describe("Pruebas en el loginReducer", () => {
   test("Debe de realizar el login", () => {
      const initialState = {};

      const action = {
         type: typesLogin.login,
         payload: {
            id: "ABC",
            displayname: "Fernando",
         },
      };

      const state = loginReducer(initialState, action);

      expect(state).toEqual({
         id: "ABC",
         name: "Fernando",
      });
   });

   test("Cerrar sesión - logout", () => {
      const initialState = {
         id: "ABC",
         displayname: "Fernando",
      };

      const action = {
         type: typesLogin.logout,
      };

      const state = loginReducer(initialState, action);
      expect(state).toEqual({});
   });

   test("State por default", () => {
      const initState = {
         id: "ABC",
         displayname: "Fernando",
      };

      const action = {
         type: typesLogin.Hola,
      };

      const state = loginReducer(initState, action);
      expect(state).toEqual(initState);
   });
});
