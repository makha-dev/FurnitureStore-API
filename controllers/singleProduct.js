const SingleProduct = require('../models/singleProduct');

const getSingleProduct = async (req, res) => {
    const {id} = req.query;
    const queryObject = {};
    
    if(id){
        queryObject.id = id;
    }

    let result = SingleProduct.find(queryObject);
    let products = await result;
    if(products.length === 0){
        return;
    }
    res.status(200).json(products[0])

}

module.exports = {getSingleProduct};