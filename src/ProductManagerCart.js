//Primera Pre Entrega - Andrade Matias

const fs = require('fs');
class ProductManagerInCart {

    #products

    constructor() {

        this.path = './src/products.json';
        this.pathCart = './src/cart.json';
        this.productsCart = [];
        this.#products = [];
    }

    getProductsUser = async (id) => {
        try {
            let res = await fs.promises.readFile(this.pathCart, 'utf-8')
            this.productsCart = JSON.parse(res)
            const userIdCart = this.productsCart.find(obj => obj.id == id)
            if (userIdCart) {
                return userIdCart
            } else {
                return {error : "Not found"}
            }
        } catch (res) {
            console.log(`Not Cart...`)
        }

    }

    addProductUserCart = async (cid, pid) => {
        try {
            let resProducts = await fs.promises.readFile(this.path, 'utf-8')
            this.#products = (JSON.parse(resProducts));
            let res = await fs.promises.readFile(this.pathCart, 'utf-8')
            this.productsCart = (JSON.parse(res));
            const userIdCart = this.productsCart.find(obj => obj.id == cid)
            const product = this.#products.find(obj => obj.id == pid)
            const productExist = userIdCart.cartId.find(obj => obj.id == pid)
            
            if (productExist) {
                productExist.quantity += 1
            } else {
                const productModify = { productId: product.id, quantity: 1 }
                userIdCart.cartId.push(
                    productModify
                )
            }
           
            const writeNewProductUserCart = async () => {
                try {
                    await fs.promises.writeFile(this.pathCart, JSON.stringify(this.productsCart, null, 2), 'utf-8')
                    console.log("Write successfully")
                } catch {
                    console.log("Write error")
                }
            }

            await writeNewProductUserCart();
            return userIdCart

        } catch {
            console.log(`Not Cart...`)
            return ({ error: "Error" })
        }
    }



    addUserCart = async () => {
        try {
            let resProducts = await fs.promises.readFile(this.path, 'utf-8')
            this.#products = (JSON.parse(resProducts));
            let res = await fs.promises.readFile(this.pathCart, 'utf-8')
            this.productsCart = (JSON.parse(res));
            console.log(this.#products)
        } catch (res) {
            console.log(`Not Cart...`)
            try {
                await fs.promises.writeFile(this.pathCart, JSON.stringify(this.productsCart, null, 2), 'utf-8')
                console.log("Cart create")
            } catch {
                return {error : "Error cart create"}
            }
        }


        const id = this.productsCart.length == 0 ? 1 : this.productsCart[this.productsCart.length - 1].id + 1
        const cartId = []

        this.productsCart.push({
            id,
            cartId
        })

        const writeNewIdCart = async () => {
            try {
                await fs.promises.writeFile(this.pathCart, JSON.stringify(this.productsCart, null, 2), 'utf-8')
                console.log("Write successfully")
            } catch {
                return { error: "Write error"}
            }
        }

        await writeNewIdCart();
        return {
            id,
            cartId
        };
    }

}


module.exports = ProductManagerInCart;