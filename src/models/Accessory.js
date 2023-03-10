const { default: mongoose } = require('mongoose');
const mongoosed = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'Invalid URL'],
    },
    description: {
        type: String,
        required: true,
        maxLenght: 50,
    },
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory; 