import { Outlet } from "react-router-dom";
import "./Layout.css"
import NavBar from "./components/NavBar/NavBar";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./components/Carrito/Carrito";

//nuestro primer componente creado en React
const Layout = ( ) => {
    
    return (
        <DataProvider>
        <>  
            <header>
                <NavBar />
            </header>

            <main>
                <Outlet />
                <Carrito />
            </main>

            
            {/* <body>
            <Carrito />
            </body> */}
           
            
        </>
        {/*  */}
        </DataProvider>
    );
}

export default Layout;