const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    CategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    SubCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory"
    },
    ExtraSubCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "extrasubcategory"
    },
    ProductName: {
        type: String
    },
    discription: {
        type: String
    },
    ProductImage: {
        type: String
    },
    Productprice: {
        type: Number
    },
    Brand: {
        type: String
    }


})

module.exports = mongoose.model('product', productSchema);