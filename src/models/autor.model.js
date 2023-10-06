import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 3
    },
    apellido: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 3
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    biografia: {
        type: String,
        required: true,
        maxlength: 200,
        minlength: 3
    },
});

const Autor = mongoose.model('autor', autorSchema);