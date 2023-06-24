const { Schema, model } = require( 'mongoose' );
const mongoosePaginate = require('mongoose-paginate-v2')

const subnivelesSchema = new Schema({
    nivel:{
        type: Number,
        required: true
    },
    genero:{
        type: String,
        required: true
    },
},
        {timestamps: true}  
    );

    subnivelesSchema.plugin(mongoosePaginate);

    

module.exports = model(`subniveles`, subnivelesSchema);