const mongoose = require('mongoose');

const settingSchema = mongoose.Schema({
    status: {
        type: Boolean,
        default: true
    },
    general      : {
        titleGeneral : {
            type: String,
            default: 'Wishlist',
            trim: true
        },
        mainColor   : {
            type: String,
            default: '#EE202E'
        }
    },
   
    initial     : 
         /** OPTIONS
         * 0. Trên thanh menu
         * 1. Một nút Wishlist riêng biệt
         * 2. Tùy chỉnh
         */
        {
            optionPosition: {
                type: Number,
                default: 1   
            },
            /**
             * NEO location option === 1
             * 0. Dưới phải,
             * 1. Dưới trái
             * 2. Giữa phải
             * 3. Giữa trái
             */
            fixedLocation : {
                type: Number,
                default: 2
            },
            /**
             * 0. Pop up
             * 1. Một trang riêng
             */
            showFormat: {
                type: Number,
                default: 0
            },
            showQuantityLiked: {
                type: Boolean,
                default: true
            }
    },
    configProduct     : {
        patternShow:  {
            type: Number,
            default: 2
        },
        titleBefore   : {
            type: String,
            default: 'Thêm vào yêu thích'
        },
        titleAfter    : {
            type: String,
            default: 'Đã yêu thích'
        },
        colorBefore    : {
            type: String,
            default: '#666666'
        },
        colorAfter   : {
            type: String,
            default: '#EA9999'
        },
        showQuantity : {
            type: Boolean,
            default: true
        }
    },
    shopName: {
        type: String,
    }
});
  
  module.exports = mongoose.model('setting', settingSchema);