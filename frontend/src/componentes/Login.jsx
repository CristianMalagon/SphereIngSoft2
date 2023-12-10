import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const consultar = () => {
    var email =  String(correo);
    var pass = password;
    enviarSolicitud(email, pass)
  }

  const enviarSolicitud = async (email, pass) => {
    await axios.get(`http://localhost:5555/usuarios/correo/${email}`).then( (response) => {
      if (response.data.password == pass) {
        navigate("/clientes");
      }else if(response.status == 404) {
        alert("El usuario no existe");
      }else{
        alert("Contraseña incorrecta");
      }
      
    })
  }
  
  return (
    <div className='login-page'>
      <div className="inicio-header">
        <h2 style={{ textAlign: 'center' }}>Sistema de gestión de clientes y productos </h2>
      </div>
      <div />
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a className="h1"><b>Iniciar sesión</b></a>
          </div>
          <div className="card-body">
            <form action="clientes.html" method="post">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Correo electronico" value={correo} onChange={(e)=>setCorreo(e.target.value)}/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                      Recuerdame
                    </label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type='button' className="btn btn-primary btn-block" onClick={()=>consultar()}>Ingresar</button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <p className="mb-0">
              <Link to="registrar" className="text-center">Registrarse</Link>
            </p>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>

  )
}

export default Login