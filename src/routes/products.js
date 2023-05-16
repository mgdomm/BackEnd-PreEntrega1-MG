const express = require('express')
const router = express.Router()

const { getProductsController, getProductController, createProductController, updateProductController, deleteProductController } = require ('../controllers/products')


router.get("/products", getProductsController)
router.get("/products/:pid", getProductController )
router.post("/products", createProductController)
router.put("/products/:pid", updateProductController)
router.delete("/products/:pid", deleteProductController )


module.exports = router;