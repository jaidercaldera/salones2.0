const {Schema, model} = require("mongoose")

const UsersSchema = new Schema({
    name: {
        type: String, 
        required:true, 
        trim: true
    },
    email: {type: String, 
        required:true, 
        trim:true, 
        unique: true
    },
    password: {type: String, 
        required:true
    }
},{
    timestamps: true
})

module.exports = model("Users", UsersSchema);