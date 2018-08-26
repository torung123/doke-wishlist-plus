module.exports = {
    getProducts: function(shopAPI, listProductId){
        return new Promise((resolve, reject) => {
            shopAPI.get('/admin/products.json?ids=' + listProductId, function(err, data){
                if (err) {
                    console.log(err);
                    console.trace();

                    return reject({
                        error: 'Something went wrong in getProducts'
                    });
                } else if (data && data.products) {
                    return resolve(data.products);
                } else {
                    return reject({
                        error: 'Get Product lỗi'
                    });
                }
            })
        })
    },
    getCustomers: function(shopAPI, listCustomerId){
        return new Promise((resolve, reject) => {
            shopAPI.get('/admin/customers.json?ids=' + listCustomerId, function(err, data){
                if (err) {
                    console.log(err);
                    console.trace();

                    return reject({
                        error: 'Something went wrong in getCustomers'
                    });
                } else if (data && data.customers) {
                    return resolve(data.customers);
                } else {
                    return reject({
                        error: 'Get Customer lỗi'
                    });
                }
            })
        })
    }
}