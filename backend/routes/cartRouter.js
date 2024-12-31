import express from "express";
import {
  addToCart,
  removeCartItem,
  getCartItem,
} from "../controllers/cartControllers.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/addItems", authMiddleware, addToCart);
cartRouter.post("/removeItems", authMiddleware,removeCartItem);
cartRouter.post("/getItems", authMiddleware,getCartItem);

export default cartRouter;
