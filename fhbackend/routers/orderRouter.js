import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.post(
    '/',
    isAuth, // <-- utils.js 
    expressAsyncHandler(async(req, res) => {
    if (req.body.orderItems.length === 0) {
        res.status(400).send({ message: 'cart is empty'});
    } else {
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            // to get info of user, we define middleware - utils.js
            user: req.user._id,
        });
        const createdOrder = await Order.save();
        res
            .status(201)
            .send({ message: 'new order created', order: createdOrder });
    }
})
);
orderRouter.get('/:id', isAuth, expressAsyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id);
    if(order) {
        res.send(order)
    } else {
        res.status(404).send({ message: 'order not found' });
    }
})
);
export default orderRouter;