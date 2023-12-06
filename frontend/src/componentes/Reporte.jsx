import React from 'react';
import { Link } from 'react-router-dom';

const Reporte = () => {
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
                  <Link to="/clientes" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Clientes</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/productos" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Productos</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/productos" className="nav-link active">
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
                <h1 className="m-0">Reportes y Datos</h1>
              </div>{/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">  SPHERE</a></li>
                  <li className="breadcrumb-item active">Reportes y Datos</li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <div className="content">
          <div style={{background: "white", margin:"20px", padding:"20px"}}>
            <h1>Reporte del mes actual</h1>
            <div style={{background: "rgb(131, 28, 28)", height: "4px", margin:"10px"}}/>
            <br/>
            <p style={{fontWeight:"bold"}}>Ingresos totales:</p>
            <p style={{fontWeight:"bold"}}>ventas realizadas:</p>
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

export default Reporte