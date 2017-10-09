import {Schema, model } from 'mongoose';

export enum Status{Declared, InProgress, Blocked, Completed, Accepted}

let UserStoryScema: Schema = new Schema({
    owner: {
        type: Schema.OjectId,
        ref:'User'
    },
    point: {
        type:Number,
        required: false,
    },
    status: {
        type: Status,
        required: true
    },
    insprint: {
        //TODO replace with sprint id
        type:Number,
        required: false
    }
})

export default model('UserStory', UserStoryScema);