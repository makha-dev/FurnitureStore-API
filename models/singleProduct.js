const mongoose = require('mongoose');

// const singleProductSchema = new mongoose.Schema({
//     id: {
//         type: String,
//         required: [true, 'the id of single product is required']
//     },
//     fields: new mongoose.Schema({
//         name: {
//             type: String,
//             required: [true, 'the name in the fields should be provided']
//         },
//         price: {
//             type: Number,
//             required: [true, 'the price in the fields should be provided']
//         },
//         featured: {
//             type: Boolean,
//             default: false,
//         },
//         image: [new mongoose.Schema({
//             width: {
//                 type: Number,
//                 required: [true, 'the width of image should be provided']
//             },
//             height: {
//                 type: Number,
//                 required: [true, 'the height of image should be provided']
//             },
//             url: {
//                 type: String,
//                 required: [true, 'the url of image should be provided']
//             },
//             filename: {
//                 type: String,
//                 default: "product-1.jpeg",
//             },
//             size: {
//                 type: Number,
//                 required: [true, 'the size of image should be provided']
//             },
//             type: {
//                 type: String,
//                 default: "image/jpeg",
//             },
//             thumbnails: {
//                 small: new mongoose.Schema({
//                     url: {
//                         type: String,
//                         required: [true, ['url of imageParams should be provided']]
//                     },
//                     width: {
//                         type: Number,
//                         required: [true, 'the width of imageParams should be provided']
//                     },
//                     height: {
//                         type: Number,
//                         required: [true, 'the height of imageParams should be provided']
//                     },
//                 }),
//                 large: new mongoose.Schema({
//                     url: {
//                         type: String,
//                         required: [true, ['url of imageParams should be provided']]
//                     },
//                     width: {
//                         type: Number,
//                         required: [true, 'the width of imageParams should be provided']
//                     },
//                     height: {
//                         type: Number,
//                         required: [true, 'the height of imageParams should be provided']
//                     },
//                 }),
//                 full: new mongoose.Schema({
//                     url: {
//                         type: String,
//                         required: [true, ['url of imageParams should be provided']]
//                     },
//                     width: {
//                         type: Number,
//                         required: [true, 'the width of imageParams should be provided']
//                     },
//                     height: {
//                         type: Number,
//                         required: [true, 'the height of imageParams should be provided']
//                     },
//                 })
//             }
//         })],
    
//     }),
//     description: {
//         type: String,
//         required: [true, 'the description of single product is required'],
//     },
//     colors: [String],
//     company: {
//         type: String,
//         default: 'ikea'
//     },
// });

// module.exports = mongoose.model('SingleProduct', singleProductSchema);


const singleProductSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, 'the id of single product is required']
    },
    stock: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, 'the price in the fields should be provided']
    },
    shipping: {
        type: Boolean,
        default: false,
    },
    category: {
        type: String,
        required: [true, 'the category is required'],
    },
    colors: [String],
    images: [new mongoose.Schema({
        width: {
            type: Number,
            required: [true, 'the width of image should be provided']
        },
        height: {
            type: Number,
            required: [true, 'the height of image should be provided']
        },
        url: {
            type: String,
            required: [true, 'the url of image should be provided']
        },
        filename: {
            type: String,
            default: "product-1.jpeg",
        },
        size: {
            type: Number,
            required: [true, 'the size of image should be provided']
        },
        type: {
            type: String,
            default: "image/jpeg",
        },
        thumbnails: {
            small: new mongoose.Schema({
                url: {
                    type: String,
                    required: [true, ['url of imageParams should be provided']]
                },
                width: {
                    type: Number,
                    required: [true, 'the width of imageParams should be provided']
                },
                height: {
                    type: Number,
                    required: [true, 'the height of imageParams should be provided']
                },
            }),
            large: new mongoose.Schema({
                url: {
                    type: String,
                    required: [true, ['url of imageParams should be provided']]
                },
                width: {
                    type: Number,
                    required: [true, 'the width of imageParams should be provided']
                },
                height: {
                    type: Number,
                    required: [true, 'the height of imageParams should be provided']
                },
            }),
            full: new mongoose.Schema({
                url: {
                    type: String,
                    required: [true, ['url of imageParams should be provided']]
                },
                width: {
                    type: Number,
                    required: [true, 'the width of imageParams should be provided']
                },
                height: {
                    type: Number,
                    required: [true, 'the height of imageParams should be provided']
                },
            })
        }
    })],
    reviews: {
        type: Number,
        default: 0
    },
    stars: {
        type: Number,
        default: 4.5
    },
    name: {
        type: String,
        required: [true, 'the name of single product is required'],
    },
    description: {
        type: String,
        required: [true, 'the description of single product is required'],
    }, 
    company: {
        type: String,
        default: 'ikea'
    },
});



module.exports = mongoose.model('Single-Product', singleProductSchema);