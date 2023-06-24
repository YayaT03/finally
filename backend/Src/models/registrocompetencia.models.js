const { Schema, model } = require( `mongoose` );


const registrocompetenciaSchema = new Schema({
    documentid:{
        type: Number,
        default: 0,
        required: true
    },
    name1:{
        type: String,
        required: true
    },
    name2:{
        type: String,
        required: true
    },
    lastname1:{
        type: String,
        require: true,
    },
    lastname2:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
    },
    phonenumber:{
        type: Number,
        default: 0,
    },
    grupoactual:{
        type: String,
        required: true
    },
    subnivel:{
        type: String,
        required: true
    },
},
        {timestamps: true}  
    );

    

module.exports = model('registrocompetencia', registrocompetenciaSchema);