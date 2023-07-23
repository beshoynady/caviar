const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const OrderSchema = new mongoose.Schema({
    serial:{
        type: Number,
        unique: true,
        min: 1,
        max: 1000000,
        trim: true,
        validate: {
            validator: function(v) {
                return v >= 1000 && v <= 1000000;
            },
            message: '{VALUE} is not a valid sirial number'
        }
    },
    products:[{
        productid:{
        type: ObjectId,
        ref: 'Product',
        required: true,
        },
        quantity:{
            type: Number,
            required: true,
            min: 1,
            max: 1000000,
            trim: true,
            validate: {
                validator: function(v) {
                    return v >= 1 && v <= 1000000;
                    },
                    message: '{VALUE} is not a valid quantity'
                    }
        },
        price:{
            type: Number,
            required: true,
            min: 1,
            max: 1000000,
            trim: true,
            validate: {
                validator: function(v) {
                    return v >= 1 && v <= 1000000;
                    },
                    message: '{VALUE} is not a valid price'
                    }
        },
        totalprice:{
            type: Number,
            required: true,
            min: 1,
            max: 1000000,
            trim: true,
        }    
        }],
    total:{
        type: Number,
        min: 1,
        max: 1000000,
        trim: true,
    },
    table:{
        type: ObjectId,
        ref: 'Table',        
    },
    customer:{
        type: ObjectId,
        ref: 'User',
    },
    date:{
        type: Date,
        default: Date.now,
        required: true,
    },
    status:{
        type: String,
        default: 'Pending',
        required: true,
        enum: ['Pending', 'Delivered', 'Cancelled'],
    },
    payment_status:{
        type: String,
        default: 'Pending',
        required: true,
        enum: ['Pending', 'Paid', 'Refunded'],
        trim: true,
    },
    payment_date:{
        type: Date,
        default: Date.now,
        required: true,
    },
    payment_method:{
        type: String,
        default: 'Cash',
        required: true,
        enum: ['Cash', 'Credit Card'],
        trim: true,
        validate: {
            validator: function(v) {
                return v === 'Cash' || v === 'Credit Card';
            },
            message: '{VALUE} is not a valid payment method'
        }
    },    
},{ timestamps :true }
);


const OrderModel= mongoose.model('Order', OrderSchema);
module.exports = OrderModel
