import { model, Schema } from 'mongoose';

export const Login = model('Login', new Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}));
