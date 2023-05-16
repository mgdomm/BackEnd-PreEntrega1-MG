// Primera Pre Entrega - Andrade Matias

const express = require("express")
const path = require('path')
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

//Routes
app.use('/api', require('./routes/products'))
app.use('/api', require('./routes/carts'))
app.use('/images', require('./routes/multer'))

// App para almacenamiento de imagenes 
app.use(express.static("public"))

//Accedemos a las imagenes con: http://localhost:8080/ejemplo.jpg

const port = 8080;

app.listen(port, () => {
    console.log(`Server run on port http://localhost:${port}`)
})