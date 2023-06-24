const { Schema, model } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2')

const estudiantesSchema = new Schema({
    documentid: {
        type: Number,
        default: 0,
        required: true
    },
    name1: {
        type: String,
        required: true
    },
    name2: {
        type: String,
        
    },
    lastname1: {
        type: String,
        require: true,
    },
    lastname2: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require:true,
        unique: true,
    },
    phonenumber: {
        type: Number,
        default: 0,
    },
    direction: {
        type: String,

    },
    edad: {
        type: String,

    },
    fechadenacimiento: {
        type: String,

    },

    acudientes: [{ type: Schema.ObjectId, ref: "acudientes" }],

},
    { timestamps: true }

);

estudiantesSchema.plugin(mongoosePaginate);

module.exports = model(`estudiantes`, estudiantesSchema);