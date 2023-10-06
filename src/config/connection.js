import mongoose from "mongoose";


export const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/db')
        console.log('Conexion establecida correctamente')
    } catch (error) {
        console.error(`error al conectarse a la base de datos: ${error.message}`)
    }
}