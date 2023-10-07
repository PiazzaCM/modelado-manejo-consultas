import mongoose from "mongoose";

const libroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 3
    },
    descripcion: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 3
    },
    portada: {
        type: String,
        required: true,
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'autor',
        required: true
    },
});

export const Libro = mongoose.model('libro', libroSchema);


//Objeto con metodos:)
export const libroService = {
    async getLibros() {
        try {
            return await Libro.find();
        } catch (error) {
            throw error;
        }
    },

    async getLibro(id) {
        try {
            return await Libro.findById(id);
        } catch (error) {
            throw error;
        }
    },

    async crearLibro(libro) {
        try {
            return await Libro.create(libro);
        } catch (error) {
            throw error;
        }
    },

    async actualizarLibro(id, libro) {
        try {
            return await Libro.findByIdAndUpdate(id, libro, { new: true }); //devuelve el objeto actualizado
        } catch (error) {
            throw error;
        }
    },

    async borrarLibro(id) {
        try {
            return await Libro.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}

