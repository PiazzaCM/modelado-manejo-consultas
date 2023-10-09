import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from "dotenv";
import fileUpload from 'express-fileupload';

dotenv.config();


//importacion de rutas
import { connectDb } from './src/config/connection.js';
import { libroRouter } from './src/routes/libro.routes.js';
import { autorRouter } from './src/routes/autor.routes.js';
import { viewsRouter } from './src/routes/views.routes.js';




const app = express();
//middlewares
app.use(
  fileUpload({
    createParentPath: true,
    limits: { fileSize: 20 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "Archivo muy grande",
  })
);

app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


// Rutas
app.use ('/', viewsRouter)
app.use ('/libros', libroRouter);
app.use ('/autores', autorRouter);


//puerto
app.listen(process.env.PORT, async () => {
    console.log(`server on port ${process.env.PORT}`)
    connectDb();
  })
