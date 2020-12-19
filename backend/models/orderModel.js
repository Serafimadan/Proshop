import mongoose from 'mongoose';
//import timestamp from 'rxjs/operators';

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        requered: true,
        ref: 'User'
    },
    orderItems: [{
        name: {
            type: String,
            requered: true
        },
        qty: {
            type: Number,
            requered: true
        },
        image: {
            type: String,
            requered: true
        },
        price: {
            type: Number,
            requered: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            requered: true,
            ref: 'Product'
        }

    }],
    shippingAddress: {
        address: {
            type: String,
            requered: true
        },
        city: {
            type: String,
            requered: true
        },
        postalCode: {
            type: String,
            requered: true
        },
        country: {
            type: String,
            requered: true
        }
    },
    paymentMethod: {
        type: String,
        requered: true
    },
    paymentResult: {
        id: {type: String},
        status: {type: String},
        update_time: {type: String},
        email_address: {type: String},
    },
    taxPrice: {
        type: Number,
        requered: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        requered: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        requered: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        requered: true,
        default: false
    },
    paidAdd: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        requered: true,
        default: false
    },
    deliveredAdd: {
        type: Date,
    },
}, {
    timestamps: true
})

const Order = mongoose.model('Order', orderSchema);

export default Order;