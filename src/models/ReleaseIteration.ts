import {Schema, model } from 'mongoose';
import Sprint from './Sprint';

let ReleaseIterationSchema: Schema = new Schema({
    name: {
        type: String,
        required: false
    },
    sprints: [{
        type: Schema.Types.ObjectId,
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
    
});

export default model('ReleaseIteration', ReleaseIterationSchema);
