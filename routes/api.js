/**
 * ./routes/api.js
 * This is where you'll set up any REST api endpoints you plan on using.
 */
const express = require('express');
const router = express.Router();
var moment = require ('moment')

const request = require('request');
const Haravan = require('shopify-node-api');
const config = require('../config');
const Shop = require('../models/Shop');
const Customer = require('../models/Customer');
const Product = require('../models/Product');
const Setting = require('../models/Setting');
const action = require('../utils/actionHRV');


// @router POST /api/v1/add-wishlist
router.post('/add-wishlist', async (req, res) => {
  const {
    shopName,
    p_id,
    c_id,
    meta
  } = req.body;

  try {
    let customer_id, product_id;
    // CHECK PRODUCT
    const check_data_product = await Product.findOne({
      id: p_id,
      shopName: shopName
    });

    if (!check_data_product) {
      var product = new Product({
        id: p_id,
        meta: meta,
        shopName: shopName
      });
      let save_product = await product.save();
      product_id = save_product._id;
    } else {
      product_id = check_data_product._id
    }

    // CHECK CUSTOMER
    const check_data_customer = await Customer.findOne({
      id: c_id,
      shopName: shopName
    });
    if (!check_data_customer) {
      var add_customer_temp = new Customer({
        id: c_id,
        shopName: shopName
      });
      var save_data_customer = await add_customer_temp.save();
      customer_id = save_data_customer._id
    } else {
      customer_id = check_data_customer._id
    }

    const push_data_for_customer = await Customer.findByIdAndUpdate(customer_id, {
      $addToSet: {
        list_wistlist: product_id
      }
    }, {
      new: true
    });
    const push_data_for_product = await Product.findByIdAndUpdate(product_id, {
      $addToSet: {
        list_liker: customer_id
      }
    }, {
      new: true
    });

    if (!push_data_for_customer || !push_data_for_product) throw new Error('cannot_add_customer_like_product');
    res.json({
      error: false,
      data: {
        push_data_for_customer,
        push_data_for_product
      }
    })
  } catch (error) {
    res.json({
      error: true,
      message: error
    })
  }

});

router.post('/remove-wishlist', async (req, res, next) => {
  try {
    const {
      shopName,
      p_id,
      c_id
    } = req.body;

    const infoProduct = await Product.findOne({
      id: p_id,
      shopName: shopName
    });

    const infoCustomer = await Customer.findOne({
      id: c_id,
      shopName: shopName
    });

    const remove_data_of_product = await Product.findByIdAndUpdate(infoProduct._id, {
      $pull: {
        list_liker: infoCustomer._id
      }
    })

    const remove_data_customer = await Customer.findByIdAndUpdate(infoCustomer._id, {
      $pull: {
        list_wistlist: infoProduct._id
      }
    })


    if (!remove_data_customer || !remove_data_of_product) throw new Error('cannot_remove_data_customer_like_product');
    res.json({
      error: false,
      message: 'remove_wishlist_success'
    })
  } catch (error) {
    res.json({
      error: true,
      message: error
    })
  }

})

router.get('/list-wishlist/:c_id/:shopName', async (req, res, next) => {
  const {
    c_id,
    shopName
  } = req.params;
  try {
    const listProductOfLikeUser = await Customer.findOne({
      id: c_id,
      shopName: shopName
    }).populate('list_wistlist');
    if (!listProductOfLikeUser) return res.json({
      error: true,
      message: 'cannot_get_list'
    });
    res.json({
      error: false,
      data: listProductOfLikeUser
    });
  } catch (error) {
    res.json({
      error: true,
      message: error
    })
  }
})

// @router GET /api/v1/total-love
// @desc   total of wishlist
router.get('/total-love/:shopName', async (req, res, next) => {
  const { shopName } = req.params;
  // var query = [
  //   { $match : { shopName: shopName } },
  //   { $group: { _id: null, count: { $sum: "$count" } } }
  // ];
  // Product.aggregate(query).exec((err, count) => {
  //   if (err) throw err;
    
  // });
  try {
    const total_love = await Product.countDocuments({shopName: shopName});
    const total_customer = await Customer.countDocuments({shopName: shopName});
    // const top_product = await Product.find({ shopName: shopName }).sort({ $list_liker: -1 });

    const top_product = await Product.aggregate([
      {$match : { shopName: shopName } },
      {$unwind: "$list_liker"}, 
      {$group: {_id: "$id" , customers: {$push:"$list_liker"}, size: {$sum:1}}}, 
      {$sort:{size: -1}},
      {$limit: 10 } 
    ]);

    const top_customer = await Customer.aggregate([
      {$match : { shopName: shopName } },
      {$unwind: "$list_wistlist"}, 
      {$group: {_id: "$id" , products: {$push:"$list_wistlist"}, size: {$sum:1}}}, 
      {$sort:{size: -1}},
      {$limit: 10 } 
    ]);
  
    const listProductId = await top_product.map((product, index) => {
      return product._id
    })



    const listCustomerId = await top_customer.map((customer, index) => {
      return customer._id
    })

    const getShop = await Shop.findOne({shopName: shopName });
    const shopDomain = getShop.haravan_domain;
    const shopAccessToken = getShop.accessToken;

    //get API HARAVAN
    const shopAPI = new Haravan({
      shop: shopDomain,
      haravan_api_key: config.HARAVAN_API_KEY,
      haravan_shared_secret: config.HARAVAN_SHARED_SECRET,
      haravan_scope: config.APP_SCOPE,
      redirect_uri: `${config.APP_URI}/install/callback`,
      access_token: shopAccessToken
    });

    var listProducts = [];
    if (listProductId.length > 0){
      listProducts = await action.getProducts(shopAPI, listProductId.toString());
    }

    var listCustomers = [];
    if (listCustomerId.length > 0){
      listCustomers = await action.getCustomers(shopAPI, listCustomerId.toString());
    }

    var listCusArray = [];
    for (var i=0; i< listCustomers.length; i++){
      for (var j = 0; j < listCustomerId.length; j++){
        if( listCustomers[i].id == listCustomerId[j] ){
          listCusArray.push(listCustomers[i]); 
        };
      }
    }
    res.json({
      error: false,
      data: {
        count : {
          total_love: total_love,
          total_customer: total_customer,
        },
        top_product: {
          total_count: top_product,
          listProduct: listProducts,
          listCustomer: listCusArray
        }
      }
    });
  } catch (error) {
    res.json({
      error: true,
      message: error
    })
  }
})

router.get('/filter/:time/:shopName', async (req, res, next) => {
  const { time, shopName } = req.params;

  var dateTimeTofilter = moment().subtract(time, 'days').startOf('day');

  var filter = {"create_at": { $gte: dateTimeTofilter }}; 
  console.log(new Date(dateTimeTofilter._d));
  const totalLoveInTime = await Product.find({ shopName: shopName,  create_at: { $gte: new Date(dateTimeTofilter._d) } });
  // const totalCustomerLoveInTime = await Customer.find({ shopName: shopName,  create_at: { $gte: new Date(dateTimeTofilter._d) } });
  res.json({
    error: false,
    count_love: totalLoveInTime.length
  });

})

router.get('/setting/:shopName', async (req, res, next) => {
  const { shopName } = req.params;
  
  try {
    const setting = await Setting.findOne({ shopName: shopName });
    res.json({
      error: false,
      setting: setting
    })
  } catch (error) {
    res.json({
      error: true,
      message: error
    })
  }
})

router.post('/update-settings/:shopName', async (req, res, next) => {
  const { shopName } = req.params;
  const setting  = req.body;

  try {
    const updateSetting = await Setting.updateMany({ shopName: shopName }, {$set: {
      status: setting.status,
      general: setting.general,
      initial: setting.initial,
      configProduct: setting.configProduct
    }});
  
    res.json({
      error: false,
      message: 'Update Success' 
    })
  } catch (error) {
    res.json({
      error: true,
      message: error
    })
  }
  
})

module.exports = router;
