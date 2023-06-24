const { Schema, model } = require( 'mongoose' );
const mongoosePaginate = require('mongoose-paginate-v2')


const mensualidadesSchema = new Schema({
    idmensualidad:{
        type: Number,
        require: true,
    },
    name1:{
        type: String,
        required: true,
    },
    name2:{
        type: String,
        required: true,
    },
    lastname1:{
        type: String,
        required: true,
    },
    lastname2:{
        type: String,
        required: true,
    },
    grupo:{
        type: String,
        required: true,
    },
    subnivel:{
        type: String,
        required: true,
    },
    
    fecha:{
        type: String,
        
    },
    descripcion:{
        type: String,
       
    },
    cantidad:{
        type: Number,
        unique: true,
    },
    valorunitario:{
        type: Number,
        default: 0,
    },

    valortotal:{
        type: Number,
        default: 0,
    },
},
        {timestamps: true}  
    );

    mensualidadesSchema.plugin(mongoosePaginate);

module.exports = model(`mensualidades`, mensualidadesSchema);