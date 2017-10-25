import {Schema, model } from 'mongoose';
import User from './User';

export enum Status{Declared, InProgress, Blocked, Completed, Accepted};

let UserStoryScema: Schema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    name: {
        type: String,
        required: true
    },
    point: {
        type:Number,
        required: false,
    },
    status: {
        type: String,
        required: true
    },
    insprint: {
        //TODO replace with sprint id
        type:Number,
        required: false
    }
});

export default model('UserStory', UserStoryScema);