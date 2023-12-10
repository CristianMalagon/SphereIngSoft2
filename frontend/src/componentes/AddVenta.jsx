import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddVenta = () => {

  const [productos, setProductos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const itemsPrecio = cartItems.reduce((a, c) => a + c.precio * c.qty, 0);
  const taxPrecio = itemsPrecio * 0.14;
  const totalPrecio = itemsPrecio + taxPrecio;

  const onAdd = (prodcuto) => {
    const exist = cartItems.find(x => x._id === prodcuto._id);
    if (exist) {
      setCartItems(cartItems.map(x => x._id === prodcuto._id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...prodcuto, qty: 1 }])
    }
  };

  const onRemove = (producto) => {
    const exist = cartItems.find((x) => x.id === producto.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== producto._id));
    } else {
      setCartItems(cartItems.map(x => x._id === producto._id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  };

  useEffect(() => {
    axios.get('http://localhost:5555/productos').then((response) => {
      setProductos(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);



  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a className="brand-link">
          <img src="%PUBLIC_URL%/img/Imagen1.jpg" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light">SPHERE</span>
        </a>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item menu-open">
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/clientes" className="nav-link active">
                    <i className="far fa-circle nav-icon" />
                    <p>Clientes</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/productos" className="nav-link  ">
                    <i className="far fa-circle nav-icon" />
                    <p>Productos</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/reporte" className="nav-link ">
                    <i className="far fa-circle nav-icon" />
                    <p>Reportes y Datos </p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
        {/* /.sidebar */}
      </aside>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Clientes</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">  SPHERE</a></li>
                  <li className="breadcrumb-item active">Venta </li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        <div className="content.ac">
          <div className="row" style={{ justifyContent: "space-around", marginTop: "20px" , paddingBottom:"10%"}}>
            <div className='col-6' style={{ background: "white", padding:"1em"}}>
              <h3 style={{ color: "black"}}>Articulos</h3>
              {productos.map((producto) => (
                <li style={{ alignItems: "center" }}>{producto.nombre} || Precio: ${producto.precio}
                  <button onClick={()=> onAdd(producto)}>Añadir al carro</button>
                </li>
              ))}
            </div>
            <div className='col-5' style={{ background: "white", padding:"1em"}}>
            <h3 style={{ color: "black", marginTop: "0.2em" }}>Carrito</h3>
              {cartItems.length === 0 && <div>No se han seleccionado productos</div>}
              {cartItems.map((item) => (
                <div key={item._id} className='row' >
                  <div className='col-6'>{item.nombre}</div>
                  <div className='col-3'>
                    <button className='botonMas' onClick={() => onAdd(item)}>+</button>
                    <button className='botonMenos' onClick={() => onRemove(item)}>-</button>
                  </div>
                  <div className='col-3 text-right'>
                    {item.qty} x ${item.precio.toFixed(2)}
                  </div>
                </div>
              ))}
              {cartItems.length !== 0 && (
                <>
                  <hr/>
                  <div className='row'>
                    <div className='col-6'>Precio:</div>
                    <div className='col-6 text-right'>${itemsPrecio.toFixed(2)}</div>
                  </div>
                  <div className='row'>
                    <div className='col-6'>Impuestos:</div>
                    <div className='col-6 text-right'>${taxPrecio.toFixed(2)}</div>
                  </div>
                  <div className='row'>
                    <div className='col-6'><strong>Total a pagar:</strong></div>
                    <div className='col-6 text-right'><strong>${totalPrecio.toFixed(2)}</strong></div>
                  </div>
                  <hr/>
                  <div className='row' style={{justifyContent:"center"}}>
                    <button style={{width:"70%"}} onClick={()=>{alert("YAY")}}>Confirmar</button>                
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
      {/* /.content-wrapper */}
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
    </div>

  )
}

export default AddVenta