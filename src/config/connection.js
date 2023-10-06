import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Cargar las variables de entorno desde el archivo .env

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conexión establecida correctamente');
    } catch (error) {
        console.error(`Error al conectarse a la base de datos: ${error.message}`);
    }
}
