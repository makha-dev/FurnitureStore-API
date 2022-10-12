require('dotenv').config();

const connectDB = require('./db/connect');
const SingleProduct = require('./models/singleProduct')
const singleProductJson = require('./singleProducts.json');
const start = async() => {
    try {
        // console.log('my uri', process.env.MONGO_URI);
        console.log('working...')
        await connectDB(process.env.MONGO_URI);
        await SingleProduct.deleteMany();
        await SingleProduct.create(singleProductJson);
        console.log('success!');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();