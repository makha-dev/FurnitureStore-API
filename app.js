require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
// DB connection

const connectDB = require('./db/connect');

// router

const productsRouter = require('./routes/products');

// middleware 

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// home route

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1> <a href="/api/v1/products">Products</a>');
})

// api/v1/products route

app.use('/api/v1/products', productsRouter);

// if not found or something went wrong

app.use([notFoundMiddleware, errorMiddleware]);

// port

const port = process.env.PORT || 5002;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();




