import {Schema, model } from 'mongoose';

let TeamSchema : Schema = new Schema ({
    name: {
        type: String,
        required: true,
    }
})

export default model('Team', TeamSchema);