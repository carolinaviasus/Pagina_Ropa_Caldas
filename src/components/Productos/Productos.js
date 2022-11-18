import React from "react";
import IMG from "../../Images/aa.jpg"
export const ProductosLista  = ( ) => {
    
    return (
        <>  
            <h1 className="title">Productos</h1>
            <div className="productos">
                <div className="producto">
                    <div className="producto__img">
                        <img src={IMG} alt="" />
                    </div>
                
                    <div className="producto__footer">
                        
                        <h2>Title</h2>
                        <p>Categoria</p>
                        <p className="price">$200</p>
                    </div>
                    <div className="buttom">
                        <button className="btn"> Añadir al carro   </button>
                        
                    </div>
                </div>

                <div className="producto">
                    <div className="producto__img">
                        <img src={IMG} alt="" />
                    </div>
                
                    <div className="producto__footer">
                        
                        <h2>Title</h2>
                        <p>Categoria</p>
                        <p className="price">$200</p>
                    </div>
                    <div className="buttom">
                        <button className="btn"> Añadir al carro   </button>
                        
                    </div>
                </div>

                <div className="producto">
                    <div className="producto__img">
                        <img src={IMG} alt="" />
                    </div>
                
                    <div className="producto__footer">
                        
                        <h2>Title</h2>
                        <p>Categoria</p>
                        <p className="price">$200</p>
                    </div>
                    <div className="buttom">
                        <button className="btn"> Añadir al carro   </button>
                        
                    </div>
                </div>

                <div className="producto">
                    <div className="producto__img">
                        <img src={IMG} alt="" />
                    </div>
                
                    <div className="producto__footer">
                        
                        <h2>Title</h2>
                        <p>Categoria</p>
                        <p className="price">$200</p>
                    </div>
                    <div className="buttom">
                        <button className="btn"> Añadir al carro   </button>
                        
                    </div>
                </div>
            </div>

        </>
        
    );
}

