import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({

    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: String,

    location: {
        type: String,
        required: true
    },

    propertyType: {
        type: String,
        enum: ["sell", "lease", "rent"],
        required: true
    },

    price: {
        type: Number,
        default: null
    },

    rentAmount: {
        type: Number,
        default: null
    },

    leaseDuration: {
        type: Number,
        default: null   // only used if propertyType = "lease"
    },

    status: {
        type: String,
        enum: ["available", "sold", "leased", "rented", "cancelled"],
        default: "available"
    },

    listingDate: {
        type: Date,
        default: Date.now
    },

    cancelDate: {
        type: Date,
        default: null
    },

    commissionPaid: {
        type: Number,
        default: 0
    },

    refundAmount: {
        type: Number,
        default: 0
    }

},{timestamps:true});

const Prop = mongoose.model("Prop",propertySchema)
export default Prop;