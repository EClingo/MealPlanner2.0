const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title:  String,
    userId: {
        type: String,
        required: true
    },
    image: String,
    id: Number,
    instructions: Object,
    igredients: Object,
    meta: {
        servings: Number,
        readyInMinutes: Number,
        glutenFree: Boolean,
        dairyFree: Boolean,
        vegetarian: Boolean,
        vegan: Boolean
    },
    
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;