import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data';
import Product from '../models/product.Model';

const productRouter = express.Router();

productRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    const createdProduct = await Product.insertMany(data.products);
    res.send({createdProduct});
}));

export default productRouter;