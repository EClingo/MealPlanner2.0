const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    ingregients: [
        {
        id: Number,
        name: String,
        amount: Number,
        unit: String,
        metric: {
            amount: Number,
            unitShort: String,
            unitLong: String
            },
        }
    ],
    readyInMinutes: {
        type: Number,
        required: false
    },
    servings: {
        type: Number,
        required: true
    },
    instructions: {
        number: Number,
        step: String,
        required: true
    },
    
    

}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;