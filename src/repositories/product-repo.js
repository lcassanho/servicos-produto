const mongoose = require('mongoose');

const Product = mongoose.model('Product');

exports.getProduct = async () => {
    const result = await Product.find({}, '_id title description price active')

    return result
}