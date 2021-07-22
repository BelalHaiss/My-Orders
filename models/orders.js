const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: Date.now
  },
  details: {
    type: String,
    required: true
  },
  category: {
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
  }
});

module.exports = mongoose.model('Order', orderSchema);
