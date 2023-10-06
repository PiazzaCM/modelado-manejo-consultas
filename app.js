import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import 'dotenv/config.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { connectDb } from './src/config/connection.js';
import { environments } from './src/config/environments.js';



const app = express();



//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// Rutas



//puerto
app.listen(environments.PORT, async () => {
    console.log(`server on port ${environments.PORT}`)
    connectDb();
  })
  