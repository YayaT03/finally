const { Schema, model } = require( `mongoose` );
const mongoosePaginate = require('mongoose-paginate-v2')

const profesoresSchema = new Schema({
    documentid:{
        type: String,
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
        required: true
    },
    lastname2:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
    },
    phonenumber:{
        type: Number,
        default: 0,
    },
    direction:{
        type: String,
        
    },
    edad:{
        type: String,
        required: true
    },
    fechadenacimiento:{
        type: String,
        required: true
    },
},
        {timestamps: true}  
    );

    
    profesoresSchema.plugin(mongoosePaginate);

module.exports = model('profesores', profesoresSchema);