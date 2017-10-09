import {Schema, model } from 'mongoose';

let TeamSchema : Schema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    members: [{
        type: Schema.ObjectId ,
        ref: 'User'
    }],
    PO:{
        type: Schema.ObjectId ,
        ref: 'User'
    },
    SM:{
        type: Schema.ObjectId ,
        ref: 'User'
    },
    currentVelocity:{ 
        type: Number
    }
})

export default model('Team', TeamSchema);