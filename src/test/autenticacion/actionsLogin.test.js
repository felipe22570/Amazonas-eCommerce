import { loginSincrono, logoutSincronico } from "../../redux/actions/actionsLogin";
import { typesLogin } from "../../redux/types/types";

describe("Verificar acciones de login", () => {
   test("Validar login sincrónico", () => {
      const id = "ABC123";
      const displayname = "Fernando";

      const loginAction = loginSincrono(id, displayname);

      expect(loginAction).toEqual({
         type: typesLogin.login,
         payload: {
            id,
            displayname,
         },
      });
   });

   test("Cerrar sesión", () => {
      const logoutAction = logoutSincronico();

      expect(logoutAction).toEqual({
         type: typesLogin.logout,
      });
   });
});
