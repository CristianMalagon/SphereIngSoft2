import React from 'react'
import { Link } from 'react-router-dom'

const Recover = () => {
  return (
<div className='login-page'>
  <div className="inicio-header">
    <h2 style={{textAlign: 'center'}}>Sistema de gestión de clientes y productos </h2>      
  </div>
  <div className="login-box">
    <div className="card card-outline card-primary">
      <div className="card-header text-center">
        <a className="h1"><b>Nueva contraseña</b></a>
      </div>
      <div className="card-body">
        <form action="login-v2.html" method="post">
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Contraseña" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Confirmar contraseña" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="submit" className="btn btn-primary btn-block">Cambiar contraseña</button>
            </div>
            {/* /.col */}
          </div>
        </form>
        <p className="mt-3 mb-1">
          <Link to="/">Iniciar sesión</Link>
        </p>
      </div>
      {/* /.login-card-body */}
    </div>
  </div>
  {/* /.login-box */}
</div>

  )
}

export default Recover