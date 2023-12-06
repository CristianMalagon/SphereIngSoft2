import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import rutasCliente from "./rutas/rutasCliente.js"
import rutasUsuario from "./rutas/rutasUsuario.js"
import rutasProducto from "./rutas/rutasProducto.js"
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response)=>{
  console.log(request)
  return response.status(234).send("why hello there")
});

app.use('/clientes', rutasCliente)
app.use('/usuarios', rutasUsuario)
app.use('/productos', rutasProducto)

mongoose.connect(mongoDBURL,{dbName: 'DBIngSoft'}).then(()=>{
  console.log('App connected to database');
  app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`);
  });
})
.catch((error)=>{
  console.log(error);
});
