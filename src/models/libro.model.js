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
    precio: {
        type: Number,
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

const Libro = mongoose.model('libro', libroSchema);