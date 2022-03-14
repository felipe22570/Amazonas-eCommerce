import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { ContLogin } from "../styles/loginStyle";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registroEmailPasswordNombre } from "../redux/actions/actionsRegister";

const Registro = () => {
   const dispatch = useDispatch();
   const formik = useFormik({
      initialValues: {
         nombre: "",
         email: "",
         pass: "",
         pass2: "",
      },
      validationSchema: Yup.object({
         nombre: Yup.string().required(),
         email: Yup.string().email().required(),
         pass: Yup.string()
            .required()
            .oneOf([Yup.ref("pass2")]),
         pass2: Yup.string().required(),
      }),
      onSubmit: (data) => {
         console.log(data);
         const { nombre, email, pass } = data;

         dispatch(registroEmailPasswordNombre(email, pass, nombre));
      },
   });

   return (
      <ContLogin>
         <img
            src="https://res.cloudinary.com/dcane9asx/image/upload/v1646255888/amazonas_tngpkv.png"
            alt=""
         />

         <div className="login">
            <h2>Registrate</h2>
            <form onSubmit={formik.handleSubmit}>
               <label>Nombre:</label>
               <input type="text" name="nombre" onChange={formik.handleChange} />
               <br />
               <label>Correo:</label>
               <input type="email" name="email" onChange={formik.handleChange} />
               <br />
               <label>Contraseña:</label>
               <input type="password" name="pass" onChange={formik.handleChange} />
               <br />
               <label>Repite la contraseña:</label>
               <input type="password" name="pass2" onChange={formik.handleChange} />
               <br />
               <button type="submit">Enviar</button>
            </form>
            <Link to="/login">Volver a inicio</Link>
         </div>
      </ContLogin>
   );
};

export default Registro;
