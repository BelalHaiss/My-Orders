const express = require('express');
const router = express.Router();
const { isAuth } = require('../middlewares/auth');
const { orderSchema } = require('../middlewares/joi');
const Order = require('../models/orders');
// @Route get api/orders
// @desc   show your orders
// @access  private

router.get('/', isAuth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ date: -1 });

    return res.json(orders);
  } catch (e) {
    res.status(500).json({ msg: 'server error' });
  }
});
// @Route post api/orders
// @desc   post a order
// @access  private

router.post('/', isAuth, orderSchema, async (req, res) => {
  if (!(Object.keys(req.body).length === 7)) {
    return res.status(400).send('please check your request ');
  }
  try {
    const { name, phone, address, comments, type, item, qty } = req.body;
    const newOrder = new Order({
      user: req.user._id,
      name,
      phone,
      address,
      comments,
      type,
      item,
      qty
    });
    const order = await newOrder.save();

    res.json(order);
  } catch (e) {
    res.status(500).json({ msg: 'server error' });
  }
});
// @Route put api/orders/id
// @desc   update an order
// @access  private
router.put('/:id', isAuth, async (req, res) => {
  try {
    const { id } = req.params;

    let order = await Order.findById(id);

    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ msg: 'not authorized' });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { $set: req.body },
      { runValidators: true, new: true }
    );
    res.json(updatedOrder);
  } catch (e) {
    res.status(500).json({ msg: 'server error' });
  }
});
// @Route delet api/orders/id
// @desc   delete an order
// @access  private

router.delete('/:id', isAuth, async (req, res) => {
  const { id } = req.params;
  let order = await Order.findById(id);

  if (order.user.toString() !== req.user._id.toString()) {
    return res.status(401).json({ msg: 'not authorized' });
  }
  try {
    await Order.findByIdAndRemove(id);
    res.json({ msg: 'order Deleted' });
  } catch (e) {
    res.status(500).json({ msg: 'server error' });
  }
});
module.exports = router;
