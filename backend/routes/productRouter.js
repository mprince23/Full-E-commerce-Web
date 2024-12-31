// import exprees from 'express'
// import { addProduct, productList, removeProduct } from '../controllers/productControllers.js'
// import multer from 'multer'

// const productRouter = exprees.Router()

// // Image Storage Engine
// // const storage = multer.diskStorage({
// //     destination: "uploads",
// //     filename: (req, file, cb) => {
// //         return cb(null, `${Date.now()}${file.originalname}`)
// //     }
// // })

// // const upload = multer({ storage: storage })

// productRouter.post("/addproduct", addProduct)
// productRouter.get("/productlist", productList)
// productRouter.post("/removeproduct", removeProduct)

// export default productRouter;



import express from "express";
import { addProduct, productList, removeProduct } from "../controllers/productControllers.js";
import multer from "multer";

const productRouter = express.Router();

// Multer configuration to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

productRouter.post("/addproduct", upload.single("image"), addProduct);
productRouter.get("/productlist", productList);
productRouter.post("/removeproduct", removeProduct);

export default productRouter;
