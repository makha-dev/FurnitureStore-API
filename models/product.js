const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'product name must be provided'],
    },
    price: {
        type: Number,
        required: [true, 'product name price be provided'],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'marcos', 'liddy', 'caressa'],
            message: '{VALUE} is not supported'
        }
    },
    image: {
        type: String,
        default: "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160"
    },
    colors: {
        type: [String],
    },
    shipping: {
        type: Boolean,
        default: false,
    },
    category: {
        type: String,
        default: "living room"
    },
    description: {
        type: String,
        default: "Description"
    }
});

module.exports = mongoose.model('Product', productSchema);