import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesProducto } from "../types/types";

export const agregarAsyn = (newProduct) => {
   return (dispatch) => {
      addDoc(collection(db, "productos"), newProduct)
         .then((resp) => {
            dispatch(agregarSyn(newProduct));
         })
         .catch((error) => {
            console.log(error);
         });
   };
};

export const agregarSyn = (products) => {
   return {
      type: typesProducto.agregarProducto,
      payload: products,
   };
};

export const listarAsync = () => {
   return async (dispatch) => {
      const traerDatos = await getDocs(collection(db, "productos"));
      const productos = [];
      traerDatos.forEach((doc) => {
         productos.push({
            ...doc.data(),
         });
      });
      dispatch(listarSyn(productos));
   };
};

export const listarSyn = (productos) => {
   return {
      type: typesProducto.listarProducto,
      payload: productos,
   };
};

export const buscarAsyn = (searchText) => {
   return async (dispatch) => {
      const traerCollection = collection(db, "productos");
      // const q = query(traerCollection, where("nombre", "==", searchText));
      const q = query(traerCollection, where("nombre", ">=", searchText, "<", searchText + "z"));
      const datosQ = await getDocs(q);
      const productos = [];
      datosQ.forEach((doc) => {
         productos.push({
            ...doc.data(),
         });
      });
      dispatch(buscarSyn(productos));
   };
};

export const buscarSyn = (productos) => {
   return {
      type: typesProducto.buscarProducto,
      payload: productos,
   };
};
