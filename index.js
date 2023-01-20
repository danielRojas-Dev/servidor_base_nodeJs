import express from "express";
import morgan from "morgan";
import cors from   "cors";

import {conexionBD} from "./src/config/conexion.js";
import { routes } from "./src/routes/index.routes.js";


const app = express();

app.use(
    cors({
      origin: "*",
    })
  );
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('port', process.env.PORT || 4000);

//Una vez haya configurado el archivo index.routes descomentar la siguiente linea.
// app.use('/api', routes());


const server = app.listen(app.get("port"), ()=>{
    console.log(`Server listen in port ${app.get("port")}`);
})


try {
    conexionBD();
} catch (error) {
    console.log(error);
}


export {server, app};

