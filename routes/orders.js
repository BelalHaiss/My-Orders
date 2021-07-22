const express = require('express');
const router = express.Router();
const { isAuth } = require('../middlewares/auth');
const Order = require('../models/orders');
// @Route get api/orders
// @desc   show your orders
// @access  private

router.get('/', isAuth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ date: -1 });
    res.json(orders);
  } catch (e) {
    console.log(e);
    res.status(500).send('server error');
  }
});
// @Route post api/orders
// @desc   post a order
// @access  private

router.post('/', isAuth, async (req, res) => {
  console.log(Object.keys(req.body).length);
  if (!(Object.keys(req.body).length === 4)) {
    return res.status(400).send('please check your request ');
  }
  try {
    const { address, details, category, qty } = req.body;
    const newOrder = new Order({
      user: req.user.id,
      address,
      details,
      category,
      qty
    });
    const order = await newOrder.save();
    res.json(order);
  } catch (e) {
    console.log(e);
    res.status(500).send('server error');
  }
});
// @Route put api/orders/id
// @desc   update an order
// @access  private
router.put('/:id', isAuth, async (req, res) => {
  try {
    const { id } = req.params;
    let order = await Order.findById(id);

    if (order.user.toString() !== req.user.id.toString()) {
      return res.status(401).json({ msg: 'not authorized' });
    }

    const { address, details, category, qty } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedOrder);
  } catch (e) {
    console.log(e);
    res.status(500).send('server error');
  }
});
// @Route delet api/orders/id
// @desc   delete an order
// @access  private

router.delete('/:id', isAuth, async (req, res) => {
  const { id } = req.params;
  let order = await Order.findById(id);

  if (order.user.toString() !== req.user.id.toString()) {
    return res.status(401).json({ msg: 'not authorized' });
  }
  try {
    await Order.findByIdAndRemove(id);
    res.json({ msg: 'order Deleted' });
  } catch (e) {
    console.log(e);
    res.status(500).send('server error');
  }
});
module.exports = router;
