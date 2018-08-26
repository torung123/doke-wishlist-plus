const express = require('express');

const Shop = require('../models/Shop');
const Setting = require('../models/Setting');
const Haravan = require('shopify-node-api');
const config = require('../config');
const { initLiquid } = require('../utils/embedHRVCode');

const router = express.Router();

// @route   GET  /install/?shop=[tên shop]
// @desc    cài đặt shop
// @access  public
router.get('/', (req, res) => {
  const shopName = `${req.query.shop}.myharavan.com`;

  const query = Shop.findOne({ haravan_domain: shopName }).exec();

  const shopAPI = new Haravan({
    shop: shopName,
    haravan_api_key: config.HARAVAN_API_KEY,
    haravan_shared_secret: config.HARAVAN_SHARED_SECRET,
    haravan_scope: config.APP_SCOPE,
    redirect_uri: `${config.APP_URI}/install/callback`
  });
  const redirectURI = shopAPI.buildAuthURL();

  query.then((response) => {
    let save, setting;
    const shop = response;
    if (!shop) {
      save = new Shop({ haravan_domain: shopName, shopName: req.query.shop, liquid: false }).save();
      setting = new Setting({ shopName: req.query.shop }).save();
    } else {
      shop.haravan_domain = shopName;
      shop.shopName = req.query.shop;
      save = shop.save();
    }
    req.session.shopName = req.query.shop;
    return save.then(() => res.redirect(redirectURI));
  });
});

// @route    GET /install/callback?shop=[giá trị]&timestamp=[giá trị]&code=[giá trị]
// @desc     link sau khi cài hoặc vào shop 
// @access   public
router.get('/callback', (req, res) => {
  const params = req.query;
  const query = Shop.findOne({ haravan_domain: params.shop }).exec();
  query.then((result) => {
    const shop = result;
    const shopAPI = new Haravan({
      shop: params.shop,
      haravan_api_key: config.HARAVAN_API_KEY,
      haravan_shared_secret: config.HARAVAN_SHARED_SECRET,
      redirect_uri: `${config.APP_URI}/install/callback`,
      code: params.code,
      verbose: false
    });
    
    shopAPI.exchange_temporary_token(params, (error, data) => {
      if (error) {
        console.log(error);
        res.redirect('/error');
      }
      if (!shop.liquid){
        initLiquid(shopAPI);
        shop.liquid = true;
      }
      

      shop.accessToken = data.access_token;
      shop.isActive = true;
      shop.save((saveError) => {
        if (saveError) {
          console.log('Cannot save shop: ', saveError);
          res.redirect('/error');
        }
        if (config.HARAVAN_API_KEY) {
          res.redirect(`https://${shop.haravan_domain}/admin/app#/embed/${config.HARAVAN_API_KEY}`);
        } else {
          res.redirect(`https://${shop.haravan_domain}/admin/app#/list`);
        }
      });
    });
  });
});

module.exports = router;
