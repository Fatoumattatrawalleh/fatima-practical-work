const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        firstname: {
            type:String,
            trim: true,
            maxlength: 25
        },

        lastname: {
            type: String,
            trim: true,
            maxLength: 25
        },
        role: {
            type: String,
            enum: ['Admin', 'User'],
            default: 'User'
        },
        
    
})



userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject._v
        // the password should not be revealed
        delete returnedObject.password

    }
})
        

const User = mongoose.model('user', userSchema);

module.exports = User;