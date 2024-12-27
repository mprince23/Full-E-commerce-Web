import productModel from "../models/productModel.js";
import fs from 'fs'


// add product item

const addProduct = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const product = new productModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try {
        await product.save();

        res.json({
            success: true, message: "Product Added Successfully"
        })

    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }

}


// all product list

const productList = async (req, res) => {

    try {

        const products = await productModel.find({})

        res.json({
            success: true,
            data: products
        })

    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }

}


// remove product item

const removeProduct = async (req, res) => {

    try {
        
        const product = await productModel.findById(req.body.id)

        fs.unlink(`uploads/${product.image}`,() => {})

        await productModel.findByIdAndDelete(req.body.id);

        res.json({
            success: true,
            message: "Product Delete Successfully"
        })

    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }

}


export { addProduct, productList, removeProduct }