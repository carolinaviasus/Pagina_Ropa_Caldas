import React,{useContext} from 'react'
import Card from '../../images/img08.jpg';
import { DataContext } from '../../context/Dataprovider';

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  // const [carrito, setCarrito] = value.carrito;
  // const [total] = value.total;

  const tooglefalse = () => {
    setMenu(false);
	};

  const show1 = menu ? "carritos show" : "carritos";
	const show2 = menu ? "carrito show" : "carrito";
  
  return (
    <div className={show1}>
      <div className={show2}>
        <div onClick={tooglefalse} className="carrito__close">
        <i class="bi bi-x-lg" style={{ fontSize: 30, color: "gray" }} type="solid"></i>
        </div>
        <h3>Su carrito</h3>
        <div className="carrito__center">

          <div className="carrito__item">
            <img src={Card} alt="" />
            <div>
              <h4>title</h4>
              <p className="price">$30489</p>
            </div>
            <div>
              <i class="bi bi-caret-up-square-fill" style={{ fontSize: 30, color:"blue" }} type="solid"></i>
              <p className="cantidad">1</p>
              <i class="bi bi-caret-down-square-fill" style={{ fontSize: 30, color: "blue" }} type="solid"></i>
            </div>
            <div className="remove__item">
              <i class="bi bi-trash" style={{ fontSize: 70, color:"crimson" }} type="solid" ></i>
            </div>
          </div>

        </div>

        <div className="carrito__footer">
          <h4>Total: $3764723 </h4>
          <button className="btn"> Payment</button>
        </div>
      </div>
    </div>
  );
};

  