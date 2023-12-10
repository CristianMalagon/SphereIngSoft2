import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UpdateCliente = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5555/clientes').then((response) => {
      setClientes(response.data);
      console.log(response.data[0].nombre);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  const Eliminar = async (id) => {
    await axios.delete(`http://localhost:5555/clientes/${id}`).then((respuesta) => {
      if (respuesta.status == 200) {
        alert("Cliente eliminado correctamente")
      }
      window.location.reload();
    })
  }

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
          <img src="img/Imagen1.jpg" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
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
                  <li className="breadcrumb-item active">Actualizar </li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        <div className="content.ac">
          <div className="register-ac" style={{paddingBottom:"18%"}}>
            <div className="card card-outline card-primary" style={{margin:"10px"}}>
              <div className="card-header text-center">
                <a className="h1"><b>Consultar y actualizar Información</b></a>
              </div>
              <div>
                <table className="table table-striped table-bordered mt-4" style={{ background: 'white' }}>
                  <thead>
                    <tr className="table-bordered">
                      <th className='border border-slate-600 rounded-md'>No</th>
                      <th className='border border-slate-600 rounded-md'>Nombre</th>
                      <th className='border border-slate-600 rounded-md'>Documento</th>
                      <th className='border border-slate-600 rounded-md'>Correo</th>
                      <th className='border border-slate-600 rounded-md'>Telefono</th>
                      <th className='border border-slate-600 rounded-md'></th>
                    </tr>
                  </thead>
                  <tbody className='table-group-divider'>
                    {clientes.map((cliente, i) => (
                      <tr className="table-bordered">
                        <td>{i + 1}</td>
                        <td>{cliente.nombre}</td>
                        <td>{cliente.documento}</td>
                        <td>{cliente.correo}</td>
                        <td>{cliente.telefono}</td>
                        <td><Link to={`/cliente/editar/${cliente._id}`} class="btn btn-primary">Editar</Link></td>
                        <td><button onClick={() => { Eliminar(cliente._id) }} class="btn btn-danger">Eliminar</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /.content-wrapper */}
          {/* Control Sidebar */}
          <aside className="control-sidebar control-sidebar-dark">
            {/* Control sidebar content goes here */}
          </aside>
          {/* /.control-sidebar */}
        </div></div></div>

  )
}

export default UpdateCliente