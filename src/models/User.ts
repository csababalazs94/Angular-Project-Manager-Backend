import {Schema, model } from 'mongoose';

enum Roles{Developer, Tester, PO, SM}

let UserSchema: Schema = new Schema({
    createdAt: Date,
    updatedAt: Date,
    name:{
        type: String,
        default: '',
        required: true
    },
    username:{
        type: String,
        default: '',
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        default: '',
        required: true,
        unique: true
    },
    password: {
        type: String,
        default: '',
        required: true
    },
    featuredImage: {
        type:String,
        default: '',
    },
    roles: {
        type: Array,
        items: {
            type: Roles
        }
    }
});

export default model('User', UserSchema);
