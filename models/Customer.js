const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = mongoose.Schema({
    id:{
        type: String,
        trim: true,
        unique: true
    },
    first_name: String,
    last_name: String,
    email: String,
    list_wistlist: [
        {
            type: Schema.Types.ObjectId,
            ref: 'product'
        }
    ],
    list_saveforlater: [
        {
            type: Schema.Types.ObjectId,
            ref: 'variant'
        }
    ],
    shopName: {
        type: String,
    }
});
  
  module.exports = mongoose.model('customer', customerSchema);