import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { agregarAsyn } from "../../redux/actions/actionsProducto";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initiState = {
   login: {
      id: "TESTING",
   },
};

let store = mockStore(initiState);

describe("Pruebas con actionsProducto", () => {
   beforeEach(() => {
      store = mockStore(initiState);
   });

   test("Crear producto", async () => {
      await store.dispatch(
         agregarAsyn({
            url: "123",
            nombre: "123",
            description: "123",
         })
      );
   });

   const actions = store.getActions();
   console.log(actions);
});
