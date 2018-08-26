const mongoose = require('mongoose');
// const Counter = require('./Counter');


const Shop = mongoose.Schema({
  shopId: Number,
  haravan_domain: String, // Haravan domain without the .myharavan.com on the end.
  shopName: String,
  supportEmail: String,
  accessToken: String,
  isActive: { type: Boolean, default: false },
  liquid: Boolean
});

module.exports = mongoose.model('shop', Shop);
