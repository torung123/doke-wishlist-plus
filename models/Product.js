const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    id:        {
        type: String,
        trim: true,
        unique: true
    },
    list_liker : [
        {
            type: Schema.Types.ObjectId,
            ref: 'customer'
        }
    ],
    meta: {
        title: String,
        handle: String,
        images:  String,
        product_type: String,
        vendor: String,
        price: String,
        created_at: String,
        variantID: String,
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    shopName: {
        type: String,
    }
});
  
  module.exports = mongoose.model('product', productSchema);