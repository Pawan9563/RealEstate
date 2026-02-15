import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    name: String,

    email: {
        type: String,
        unique: true
    },

    password: String,

    phone: {
        type: Number,
        unique: true
    },

    role: {
        type: String,
        enum: ["buyer", "seller", "both"]
    },

    walletBalance: {
        type: Number,
        default: 0
    },

    totalSales: {
        type: Number,
        default: 0
    },

    successfulSales: {
        type: Number,
        default: 0
    },

    ratingPercentage: {
        type: Number,
        default: 0
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

},{timestamps:true});

const User = mongoose.model("User",userSchema)

export default User;