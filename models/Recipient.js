const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
  respondedWith: String
});

// We are trying to create a SUB-DOCUMENT COLLECTION here, so rather than registering the shcema,
// we are going to EXPORT it.
module.exports = recipientSchema;