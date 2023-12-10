import React from "react";
import {Routes, Route} from 'react-router-dom'
import AddCliente from "./componentes/AddCliente";
import AddVenta from "./componentes/AddVenta";
import Clientes from "./componentes/Clientes";
import Login from "./componentes/Login";
import Productos from "./componentes/Productos";
import Recover from "./componentes/Recover";
import Registro from "./componentes/Registro";
import Reporte from "./componentes/Reporte";
import UpdateCliente from "./componentes/UpdateCliente";
import EditCliente from "./componentes/EditCliente";
import AddProducto from "./componentes/AddProducto";
import EditProducto from "./componentes/EditProducto";

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/registrar" element={<Registro/>}/>
            <Route path="/recuperar" element={<Recover/>}/>
            <Route path="/clientes" element={<Clientes/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/reporte" element={<Reporte/>}/>
            <Route path="/clientes/registrar" element={<AddCliente/>}/>
            <Route path="/clientes/venta" element={<AddVenta/>}/>
            <Route path="/cliente/actualizar" element={<UpdateCliente/>}/>
            <Route path="/cliente/editar/:id" element={<EditCliente/>}/>
            <Route path="/productos/registrar" element={<AddProducto/>}/>
            <Route path="/productos/editar/:id" element={<EditProducto/>}/>
        </Routes>
    )
}

export default App;