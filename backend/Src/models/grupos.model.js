const { Schema, model } = require( 'mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')

const gruposSchema = new Schema({
    
    genero:{
        type: String,
        required: true
    },
    profesorname1:{
        type: String,
        required: true
    },
    profesorname2:{
        type: String,
        required: true
    },
    profesorlastname1:{
        type: String,
        required: true
    },
    profesorlastname2:{
        type: String,
        required: true
    },
    cantidadestudiantes:{
        type: Number,
        required: true
    },
},
        {timestamps: true}  
    );

    gruposSchema.plugin(mongoosePaginate);

    

module.exports = model('grupos', gruposSchema);