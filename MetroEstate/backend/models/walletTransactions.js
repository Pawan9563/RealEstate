import mongoose from "mongoose";

const walletTransactionSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    transactionType: {
        type: String,
        enum: [
            "commission_paid",
            "refund_received",
            "rent_paid",
            "property_purchase"
        ],
        required: true
    },

    description: {
        type: String,
        default: null
    },

    date: {
        type: Date,
        default: Date.now
    }

},{timestamps:true});

const Wallet = mongoose.model("Wallet",walletTransactionSchema)
export default Wallet;