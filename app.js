import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import dotenv from "dotenv";
import fileUpload from 'express-fileupload';


dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { connectDb } from './src/config/connection.js';
import { libroRouter } from './src/routes/libro.routes.js';
import { autorRouter } from './src/routes/autor.routes.js';

const app = express();

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.use(
  fileUpload({
    createParentPath: true,
    limits: { fileSize: 20 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "Archivo muy grande",
  })
);



// Rutas
app.use ('/libros', libroRouter);
app.use ('/autores', autorRouter);


//puerto
app.listen(process.env.PORT, async () => {
    console.log(`server on port ${process.env.PORT}`)
    connectDb();
  })
