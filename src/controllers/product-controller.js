const mongoose = require('mongoose');

const repo = require('../repositories/product-repo');

exports.get = async(req, res, next) => {
    const data = await repo.getProduct();
    res.status(200).send(data);
}