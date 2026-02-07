const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },

    quantity: {
        type: Number,
        default: 1
    },

    price: Number,

    sessionId: String

}, { timestamps: true });

module.exports = mongoose.model("cart", cartSchema);
