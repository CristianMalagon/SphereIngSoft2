import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const url = "http://localhost:5555/usuarios";
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState();
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [rol, setRol] = useState("");

  const navigate = useNavigate();


  const GuardarDatos = () => {
    if (password == passwordConf) {
      var parametros = { nombre: nombre, documento: documento, correo: correo, telefono: telefono, password: password, rol: rol }
      enviarSolicitud(parametros);
    } else {
      alert("Las contraseñas no coinciden")
    }
    
  }

  const enviarSolicitud = async (parametros) => {
    await axios.post(url, parametros).then( (respuesta) => {
      if (respuesta.status == 201) {
        alert("Usuario registrado correctamente")
      }
      navigate("/")
    })
  }
  return (
      <div class="login-page">
        <div className="inicio-header">
          <h2 style={{ textAlign: 'center' }}>Sistema de gestión de clientes y productos </h2>
        </div>
        <div className="register-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a className="h1"><b>Registrar Usuario</b></a>
            </div>
            <div className="card-body">
              <form action="login-v2.html" method="post">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Documento" value={documento} onChange={(e)=>setDocumento(e.target.value)}/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-address-card" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="correo" value={correo} onChange={(e)=>setCorreo(e.target.value.toLowerCase())}/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="tel" className="form-control" placeholder="Telefono" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-phone-volume" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <select className="form-control" id="tipoUsuario" onChange={(e)=>setRol(e.target.value)}>
                    <option value="admin">Administrador</option>
                    <option value="usuario">Usuario </option>
                  </select>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
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
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Confirmar contraseña" value={passwordConf} onChange={(e)=>setPasswordConf(e.target.value)}/>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="button" className="btn btn-primary btn-block" onClick={()=>GuardarDatos()}>Registrar</button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <Link to="/" className="text-center">Tengo una cuenta</Link>
            </div>
            {/* /.form-box */}
          </div>{/* /.card */}
        </div>
        {/* /.register-box */}
      </div>
    
  )
}

export default Registro