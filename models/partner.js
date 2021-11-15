const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
        unique: false
    },
    featured: {
        type: Boolean,
        required: false,
        unique: false
    },
    description: {
        type: String,
        required: true,
        unique: false
    }
}, {
    timestamps: true
})

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;