import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema({

    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
        required: true
    },

    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    transactionType: {
        type: String,
        enum: ["sell", "lease", "rent"],
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    leaseDuration: {
        type: Number,
        default: null   // used only for lease
    },

    rentAmount: {
        type: Number,
        default: null   // used only for rent
    },

    transactionDate: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        enum: ["completed"],
        default: "completed"
    }

},{timestamps: true});

const Transac = mongoose.model("Transac",transactionSchema)
export default Transac 