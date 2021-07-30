const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['sandwich', 'pizza'],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  item: {
    type: String,
    enum: [
      'chicken',
      'Meat Town',
      'Margherita',
      'Formaggio',
      '7alawa',
      'French fries',
      'flafel',
      'Burger'
    ],

    required: true
  },
  phone: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Order', orderSchema);
