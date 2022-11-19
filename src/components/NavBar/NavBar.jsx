import React from "react";
import NavItems from "./NavItems";


const NavBar = () => {

  
  //arreglo que guarda las propiedades de los items de navegacion
  const navItemsLeft = [
    {ruta:'/', icono:'bi bi-house', texto:'Home', onclick:''},
    {ruta:'/Productos', icono:'bi bi-calculator', texto:'Productos',onclick:''},
    {ruta:'/Cart', icono:'bi bi-cart', texto:'Cart', onclick:''},
    ]
  
  //arreglo que los items del lado derecho de la barra de navegación
  const navItemsRight = [
    {ruta:'/register', icono:'bi bi-box-arrow-in-right', texto:'Register', onclick:''},
    {ruta:'/login', icono:'bi bi-person', texto:'Login', onclick:''},
  ]

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            {/* declaracion de la funcion map para cada item de la barra de navegacion */}
            <NavItems items = { navItemsLeft } />
          </ul>
        </div>
        <div className="container-fluid" style={ { justifyContent: 'end' } }>
          <ul className="navbar-nav">
            {/* declaracion de la funcion map para cada item de la barra de navegacion */}
            <NavItems items = { navItemsRight } />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
