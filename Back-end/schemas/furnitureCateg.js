const mongoose = require('mongoose');
const fCSchema = new mongoose.Schema({
    categName: String,
})

module.exports = mongoose.model('furnitureCateg', fCSchema)