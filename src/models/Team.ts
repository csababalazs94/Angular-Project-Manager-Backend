import {Schema, model } from 'mongoose';
import User from './User';

let TeamSchema : Schema = new Schema ({
    name:{
        type: String,
        required: true,
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    po:{
        type: Schema.Types.ObjectId ,
        ref: 'User'
        
    },
    sm:{
        type: Schema.Types.ObjectId ,
        ref: 'User'        
    },
    currentVelocity:{ 
        type: Number
    }
});

export default model('Team', TeamSchema);