import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import Home from "../Home";
// import Contador from "../components/Contador/Contador";
// import Saludo from "../components/Saludo/Saludo";
import RegisterForm from '../components/Register/RegisterForm'
import LoginForm from '../components/Login/LoginForm'
import { ProductosLista } from "../components/Productos/Productos";
import { Carrito } from "../components/Carrito/Carrito";

//creacion de las rutas de nuestro proyecto
//las rutas se insertan dentro de un array, dicho array se enviará al RouterProvider
export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />,
      <Route path="/Productos" element={<ProductosLista />} />, 
      <Route path="/Cart" element={<Carrito />} />,
      <Route path="/register" element={<RegisterForm />} />,
      <Route path="/login" element={<LoginForm />} />,
    </Route>,
  ])
);
