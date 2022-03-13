import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesProducto } from "../types/types";

// Agregar nuevo producto

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

// export const editarAsyn = (codigo, producto) => {
//     return async (dispatch) => {
//        const traerCollection = collection(db, "productos");
//        const q = query(traerCollection, where("codigo", "==", codigo));
//        const datosQ = await getDocs(q);
//        let id;
//        datosQ.forEach(async (docu) => {
//           id = docu.id;
//        });
//        console.log(id);

//        const docRef = doc(db, "productos", id);
//        await updateDoc(docRef, producto).then(() => listAsynProducts());
//     };
//  };

//  export const editSyn = (codigo, product) => {
//     return {
//        type: typesProducto.edit,
//        payload: product,
//     };
//  };

//  // Listar

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

//  // Eliminar

//  export const deleteAsyn = (codigo) => {
//     return async (dispatch) => {
//        const traerCollection = collection(db, "productos");
//        const q = query(traerCollection, where("codigo", "==", codigo));
//        const datosQ = await getDocs(q);
//        datosQ.forEach((docu) => {
//           deleteDoc(doc(db, "productos", docu.id));
//        });
//        dispatch(deleteSyn(codigo));
//     };
//  };

//  export const deleteSyn = (codigo) => {
//     return {
//        type: typesProducto.delete,
//        payload: codigo,
//     };
//  };

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
