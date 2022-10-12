const express = require('express');
const router = express.Router();

const { getSingleProduct } = require('../controllers/singleProduct');

router.route('/').get(getSingleProduct)


module.exports = router;