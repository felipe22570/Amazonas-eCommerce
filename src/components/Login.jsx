import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContLogin } from "../styles/loginStyle";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginFacebook, loginGoogle } from "../redux/actions/actionsLogin";

const Login = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      validationSchema: Yup.object({
         email: Yup.string().email().required(),
         password: Yup.string().required(),
      }),
      onSubmit: (data) => {
         console.log(data);
      },
   });

   const hacerGoogle = () => {
      dispatch(loginFacebook());
      navigate("/registro");
   };

   return (
      <ContLogin>
         <img
            src="https://res.cloudinary.com/dcane9asx/image/upload/v1646255888/amazonas_tngpkv.png"
            alt=""
         />
         <div className="login">
            <h2>Iniciar sesión</h2>
            <form onSubmit={formik.handleSubmit}>
               <label>Correo:</label>
               <input type="email" name="email" onChange={formik.handleChange} />
               <br />
               <label>Contraseña:</label>
               <input type="password" name="password" onChange={formik.handleChange} />
               <br />
               <button type="submit">Continuar</button>
            </form>
            <div className="botones">
               <button className="redes" onClick={() => dispatch(loginGoogle())}>
                  <img
                     src="https://res.cloudinary.com/dcane9asx/image/upload/v1646412788/5847f9cbcef1014c0b5e48c8_ahn6z7.png"
                     alt=""
                  />
                  Ingresa con Google
               </button>
               <button className="redes" onClick={hacerGoogle}>
                  <img
                     src="https://res.cloudinary.com/dcane9asx/image/upload/v1646522028/facebook_py8qjc.png"
                     alt=""
                  />
                  Ingresa con Facebook
               </button>
            </div>
            <span>
               ¿Eres nuevo en Amazonas? <Link to="/registro">Crea tu cuenta</Link>
            </span>
         </div>
      </ContLogin>
   );
};

export default Login;
