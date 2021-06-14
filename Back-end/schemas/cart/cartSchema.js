const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    user: String,
    name: String,
    stock: Number,
    dishcount: Number,
    ppmfor3months: Number,
    ppmfor6months: Number,
    ppmfor12months: Number,
    deposit: Number,
    refundable:Boolean,
    image:String,
    quantity: Number
})
module.exports = mongoose.model('carts', cartSchema)