import React from "react";
// import { Link } from "react-router-dom";
// import { DataContext } from "context/DataProvider";

export const ProductoItem = ({id, title, price, image, category, }) => {

//   const value = useContext(DataContext);
//   const addCarrito = value.addCarrito;



  return (
    <div className="producto">
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>

      <div className="producto__footer">
        <h2>{title}</h2>
        <p>{category}</p>
        <p className="price">{price}</p>
      </div>
      <div className="buttom">
        <button className="btn"> Añadir al carro </button>
      </div>
    </div>
  );
};