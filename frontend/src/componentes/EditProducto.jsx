import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';

const EditProducto = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState(0);
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:5555/productos/${id}`).then((response)=>{
      setNombre(response.data.nombre);
      setDescripcion(response.data.descripcion);
      setPrecio(response.data.precio);
      setStock(response.data.stock);
    })
  }, [])

  const GuardarDatos = () => {
    var parametros = { nombre: nombre, descripcion: descripcion, precio: precio, stock: stock }
    enviarSolicitud(parametros);
  }

  const enviarSolicitud = async (parametros) => {
    await axios.put(`http://localhost:5555/productos/${id}`, parametros).then( (respuesta) => {
      if (respuesta.status == 200) {
        alert("Producto editado exitosamente")
      }
      navigate(-1)
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
                  <li className="breadcrumb-item active">Registrar </li>
                </ol>
              </div>{/* /.col */}
            </div>{/* /.row */}
          </div>{/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        <div className="content.ac">
          <div className="register-ac">
            <div className="card card-outline card-primary">
              <div className="card-header text-center">
                <a className="h1"><b>Actualizar informacion de cliente</b></a>
              </div>
              <div className="card-body">
                <form action="clientes.html" method="post">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-user" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Descripcion" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)}/>
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-address-card" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Precio" value={precio} onChange={(e)=>setPrecio(e.target.value)}/>
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Stock" value={stock} onChange={(e)=>setStock(e.target.value)}/>
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-phone-volume" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                    </div>
                    {/* /.col */}
                    <div className="col-4">
                      <button type="button" className="btn btn-secondary btn-block" onClick={()=>navigate(-1)}>Cancelar</button>
                      <button type="button" className="btn btn-primary btn-block" onClick={()=>GuardarDatos()}>Registrar</button>
                    </div>
                    {/* /.col */}
                  </div>
                </form>
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

export default EditProducto