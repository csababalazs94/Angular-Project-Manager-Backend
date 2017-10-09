import {Schema, model } from 'mongoose';

let ReleaseIterationSchema: Schema = new Schema({
    name: {
        type: String,
        required: false
    },
    sprints: [{
        type:Schema.ObjectId,
        ref: 'Sprint'
    }],
    startdate:{
        type: Date,
        required: true
    },
    enddate:{
        type: Date,
        required: true
    },


})

export default model('ReleaseIteration', ReleaseIterationSchema);
