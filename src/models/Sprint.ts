import {Schema, model } from 'mongoose';
import Team from './Team';
import UserStory from './UserStory';

let SprintSchema: Schema = new Schema({
    number: {
        type: Number,
        required: false,
    },
    teams:[{
        type: Schema.Types.ObjectId,
        ref: 'Team'
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
        type: Schema.Types.ObjectId,
        ref: 'UserStory'
    }]
});

export default model('Sprint', SprintSchema);
