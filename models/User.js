const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
})

// To create an actual model class and to tell mongoose that it needs to be created:
// TWO ARGUMENT MEANS we are trying to load something into the collection.
mongoose.model('users', userSchema);