import {Schema, model } from 'mongoose';

let SprintSchema: Schema = new Schema({
    number: {
        type: Number,
        required: false,
    },
    teams:[{
        type:Schema.ObjectId,
        ref:'Team'
    }],
    startdate: {
        type:Date,
        required: false
    },
    enddate:{
        type: Date,
        required: true
    },
    userstories: [{
        type: Schema.ObjectId,
        ref: 'UserStory'
    }]
})

export default model('Sprint', SprintSchema);
