import mongoose from 'mongoose';
//import { timestamp } from 'rxjs/operators';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        requered: true
    },
    email: {
        type: String,
        requered: true,
        unique: true
    },
    password: {
        type: String,
        requered: true
    },
    isAdmin: {
        type: Boolean,
        requered: true,
        default: false
    },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

export default User;