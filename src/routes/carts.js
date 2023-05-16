const express = require('express')
const router = express.Router()


const { createUserControllerCart, getProductsControllerCart, addProductUserControllerCart } = require('../controllers/carts')

router.get("/carts/:cid", getProductsControllerCart)
router.post("/carts", createUserControllerCart)
router.post("/carts/:cid/product/:pid", addProductUserControllerCart)



module.exports = router

