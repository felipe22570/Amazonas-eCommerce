import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { agregarCarritoAsyn } from "../redux/actions/actionsCarrito";

import {
   Card,
   Comment,
   ContProduct,
   ProductComments,
   ProductInfo,
   ProductsRelacionados,
} from "../styles/productStyle";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Product = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { products } = useSelector((store) => store.productos);
   const { producto } = useParams();

   const productoActual = products.find((u) => u.codigo === Number(producto));

   const sameCategory = products.filter((u) => u.categoria === productoActual.categoria);

   const [imagenPrincipal, setImagenPrincipal] = useState(productoActual.image1);

   const mandarACarrito = () => {
      const newProduct = {
         codigo: productoActual.codigo,
         nombre: productoActual.nombre,
         precio: productoActual.precio,
         imagen: productoActual.image1,
         cant: 1,
      };

      dispatch(agregarCarritoAsyn(newProduct));

      navigate("/shoppingcart");
   };

   return (
      <ContProduct>
         <NavBar />
         <ProductInfo>
            <div className="thumbnails">
               <img
                  src={productoActual.image1}
                  alt=""
                  onClick={() => setImagenPrincipal(productoActual.image1)}
               />
               <img
                  src={productoActual.image2}
                  alt=""
                  onClick={() => setImagenPrincipal(productoActual.image2)}
               />
               <img
                  src={productoActual.image3}
                  alt=""
                  onClick={() => setImagenPrincipal(productoActual.image3)}
               />
            </div>

            <div className="image">
               <ReactImageMagnify
                  {...{
                     smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        width: 500,
                        height: 500,
                        src: imagenPrincipal,
                        className: "zoom",
                     },
                     largeImage: {
                        src: imagenPrincipal,
                        width: 1200,
                        height: 1800,
                        className: "zoom",
                     },
                  }}
               />
            </div>

            <div className="details">
               <div className="details__titulo">
                  <h1>{productoActual.nombre}</h1>
                  <a href="/">Marca: {productoActual.marca}</a>
               </div>
               <div className="details__precio">
                  <div className="details__precio__head">
                     <span>Precio: </span>
                     <span style={{ color: "#AF2913", fontSize: "1rem" }}>
                        <b>$ {productoActual.precio}</b>
                     </span>
                     <span>
                        <b>Envío GRATIS</b>
                     </span>
                     <a href="/">Detalles</a>
                  </div>
                  <div className="details__precio__about">
                     <span>
                        Hasta <b>18 meses sin interéses </b> de $5.592.76{" "}
                        <a href="/">Ver mensualidades</a>
                     </span>
                     <span>
                        <a href="/">Solicita tu tarjeta de Amazon recargable </a> y obtén $100 de
                        descuento en tu primera compra mayor a $500.
                     </span>
                     <span>
                        Precio: <b>Negro</b>
                     </span>
                     <span>
                        Estilo: <b>24-105mm USM Kit</b>
                     </span>
                  </div>
               </div>
               <div className="details__about">
                  <h4>Acerca de este artículo</h4>
                  <span>{productoActual.descripcion}</span>
               </div>
            </div>

            <div className="buy">
               <span style={{ color: "#AF2913", fontSize: "1rem" }}>$ {productoActual.precio}</span>
               <span>
                  <b> Envío GRATIS.</b> <a href="/">Detalles</a>
               </span>
               <span>
                  Llega: <b>dic 15 - 28</b>
               </span>
               <span style={{ color: "#AF2913", fontWeight: 700 }}>
                  Puede que lo recibas <br /> después de navidad.
               </span>
               <button
                  style={{ backgroundColor: "#F3D184", cursor: "pointer" }}
                  onClick={(e) => {
                     e.preventDefault();
                     mandarACarrito();
                  }}
               >
                  {" "}
                  <img
                     src="https://res.cloudinary.com/dcane9asx/image/upload/v1646621631/shopping-cart2_qmxk9x.png"
                     alt=""
                  />{" "}
                  Agregar al carrito
               </button>
               <button
                  style={{ backgroundColor: "#F0AD64", cursor: "pointer" }}
                  onClick={(e) => {
                     e.preventDefault();
                     mandarACarrito();
                  }}
               >
                  {" "}
                  <img
                     src="https://res.cloudinary.com/dcane9asx/image/upload/v1646621631/play_djgs2j.png"
                     alt=""
                  />{" "}
                  Comprar ahora
               </button>
               <a href="/">Transacción segura</a>
            </div>
         </ProductInfo>

         <ProductsRelacionados>
            <h1>Productos relacionados con este artículo</h1>
            <br />
            <div className="cards">
               {sameCategory.map((p, index) => (
                  <div key={index}>
                     <Card>
                        <img src={p.image1} alt="" />
                        <span style={{ fontSize: "0.75rem", color: "#0E7184" }}>{p.nombre}</span>
                        <h3 style={{ color: "#AF2913" }}>$ {p.precio}</h3>
                        <Link to={"/product/" + p.codigo}>
                           <button>Ver producto</button>
                        </Link>
                     </Card>
                  </div>
               ))}
            </div>
         </ProductsRelacionados>

         <ProductsRelacionados>
            <h1>Inspirado por tu historial de búsqueda</h1>
            <br />
            <div>
               <Card>
                  <img
                     src="https://res.cloudinary.com/dcane9asx/image/upload/v1646616378/toppng.com-camera-png-1172x1061_i6nfke.png"
                     alt=""
                  />
                  <span style={{ fontSize: "0.75rem", color: "#0E7184" }}>
                     VAK Videocamara 809 Fhd Microfono Nocturna 24mp Touch Hdmi Lente Gran Angular -
                     Negro
                  </span>
                  <h3 style={{ color: "#AF2913" }}> $3,449.00</h3>
               </Card>
            </div>
         </ProductsRelacionados>

         <ProductComments>
            <h1>Opiniones de clientes</h1>

            <Comment>
               <div className="comment-user">
                  <img
                     src="https://res.cloudinary.com/dcane9asx/image/upload/v1644611128/samples/people/smiling-man.jpg"
                     alt=""
                  />
                  <span>Amazon costumer</span>
               </div>
               <div className="comment-body">
                  <span>
                     Electronic view finder is supposed to be the best, but from 5 minutes of
                     playing with the camera, EVF is very disappointing - despite 120Hz refresh
                     rate, the image is very choppy and laggy, almost like watching a retro video
                     game - nauseating. That, and the build quality compared to 5D Mark III feels
                     very cheap - too much plastic. There are some good features though, like
                     auto-focus, high quality video, etc.
                  </span>
                  <br />
                  <span>
                     UPDATE: The EVF appears to be definitely glitchy. Stuttering aside, 2-3 times,
                     when it was supposed to turn on by face proximity, it flashed a white thick
                     line on its upper edge, and then remained dark. Maybe I got a defective unit.
                  </span>
               </div>
               <div className="comment-foot">
                  <span>A 45 personas les resultó util</span>
                  <span>Informar de un abuso</span>
               </div>
            </Comment>

            <Comment>
               <div className="comment-user">
                  <img
                     src="https://res.cloudinary.com/dcane9asx/image/upload/v1644611127/samples/people/kitchen-bar.jpg"
                     alt=""
                  />
                  <span>Amazon costumer</span>
               </div>
               <div className="comment-body">
                  <span>
                     Electronic view finder is supposed to be the best, but from 5 minutes of
                     playing with the camera, EVF is very disappointing - despite 120Hz refresh
                     rate, the image is very choppy and laggy, almost like watching a retro video
                     game - nauseating. That, and the build quality compared to 5D Mark III feels
                     very cheap - too much plastic. There are some good features though, like
                     auto-focus, high quality video, etc.
                  </span>
                  <br />
                  <span>
                     UPDATE: The EVF appears to be definitely glitchy. Stuttering aside, 2-3 times,
                     when it was supposed to turn on by face proximity, it flashed a white thick
                     line on its upper edge, and then remained dark. Maybe I got a defective unit.
                  </span>
               </div>
               <div className="comment-foot">
                  <span>A 45 personas les resultó util</span>
                  <span>Informar de un abuso</span>
               </div>
            </Comment>
         </ProductComments>
         <Footer />
      </ContProduct>
   );
};

export default Product;
