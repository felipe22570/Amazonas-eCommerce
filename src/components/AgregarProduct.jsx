import React from "react";
import { useDispatch } from "react-redux";
import { fileUpload } from "../helpers/fileUpload";
import { useForm } from "../helpers/useForm";
import { agregarAsyn } from "../redux/actions/actionsProducto";
import { ContAgregar } from "../styles/agregarStyle";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Swal from "sweetalert2";

const AgregarProduct = () => {
   const dispatch = useDispatch();

   let [values, handleInputChange, reset] = useForm({
      codigo: Date.now(),
      nombre: "",
      image1: "",
      image2: "",
      image3: "",
      categoria: "",
      marca: "",
      precio: 0,
      descripcion: "",
   });

   const { nombre, image1, image2, image3, categoria, marca, precio, descripcion } = values;

   const handleFileChange = (e) => {
      const file = e.target.files[0];
      fileUpload(file)
         .then((response) => {
            values.image1 = response;
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleFileChange2 = (e) => {
      const file = e.target.files[0];
      fileUpload(file)
         .then((response) => {
            values.image2 = response;
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleFileChange3 = (e) => {
      const file = e.target.files[0];
      fileUpload(file)
         .then((response) => {
            values.image3 = response;
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(agregarAsyn(values));
      Swal.fire({
         title: "Producto agregado exitosamente!",
         icon: "success",
         confirmButtonText: "Continuar",
      });

      reset();
   };

   return (
      <>
         <NavBar />
         <ContAgregar>
            <h2>Agrega un producto</h2>

            <form onSubmit={handleSubmit}>
               <div className="input">
                  <label>
                     <b>Nombre:</b>
                  </label>
                  <input type="text" name="nombre" value={nombre} onChange={handleInputChange} />
               </div>

               <div className="input">
                  <label>
                     <b>Categoría:</b>
                  </label>
                  <select name="categoria" value={categoria} onChange={handleInputChange}>
                     <option value="">Selecciona la categoria</option>
                     <option value="Televisores">Televisores</option>
                     <option value="Celulares">Celulares</option>
                     <option value="Camaras">Camaras</option>
                  </select>
               </div>

               <div className="input">
                  <label>
                     <b>Marca:</b>
                  </label>
                  <input type="text" name="marca" value={marca} onChange={handleInputChange} />
               </div>

               <div className="input">
                  <label>
                     <b>Precio:</b>
                  </label>
                  <input type="number" name="precio" value={precio} onChange={handleInputChange} />
               </div>

               <div className="input">
                  <label>
                     <b>Descripción:</b>
                  </label>
                  <textarea
                     style={{ padding: "10px" }}
                     name="descripcion"
                     cols="30"
                     rows="5"
                     value={descripcion}
                     onChange={handleInputChange}
                  />
               </div>

               <div className="input"></div>

               <label>
                  <b>Imagen principal</b>
               </label>
               <input type="file" name="image1" value={image1} onChange={handleFileChange} />
               <label>
                  <b>Imagen 2:</b>
               </label>
               <input type="file" name="image2" value={image2} onChange={handleFileChange2} />
               <label>
                  <b>Imagen 3:</b>
               </label>
               <input type="file" name="image3" value={image3} onChange={handleFileChange3} />
               <button type="submit">
                  <b>Agregar</b>
               </button>
            </form>
            <Footer />
         </ContAgregar>
      </>
   );
};

export default AgregarProduct;
