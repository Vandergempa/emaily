const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient')

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  fromemail: String,
  // Then we require the sub document here and insert it here:
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  dateSent: Date,
  lastResponded: Date,
  // IMPORTANT! This makes mongoose understand that this is a reference to a particular user/ to 
  // another instance of a user.
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

// To create an actual model class and to tell mongoose that it needs to be created:
// TWO ARGUMENT MEANS we are trying to load something into the collection.
mongoose.model('surveys', surveySchema);
