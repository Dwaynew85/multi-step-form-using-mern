const mongoose = require('mongoose');

const useSchema = mongoos.Schema(
    {
        first_name: {
            type: String,
            required: true,
            trim: true
        },
        last_name: {
            type: String, 
            required: true,
            trim: true
        },
        user_email: {
            type:Sting,
            required: true,
            trim: true,
            validate(value) {
                if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
                    throw new Error('Email is not valid.')
                }
            }
        },
        user_password: {
            type: String, 
            required: true,
            trim: true,
            minlength: 6
        },
        country: {
            type: String,
            required: true,
            trim: true
        },
        state: {
            type: String, 
            trim: true
        },
        city: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const User = mongoos.model('User', userSchema);

module.exports = User;