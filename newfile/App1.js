const express = require('express')
const app = express()

const { products } = require('../data')

app.get('/', (req, res) => {
    res.json(products)
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
       const { id, title, img } = product;

       return { id, title, img }
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
        const { productID } = req.params;
         const singleProduct = products.find((product) => product.id === Number(productID))
        res.json(singleProduct)
})

app.get('/api/products/:productID/review/:reviewId', (req, res) => {
        console.log(req.params)
        res.send('Hello world')
})

app.get('/api/v1/query', (req, res) => {
        // console.log(req.query)
        const { search, limit } = req.query;
        let sortedProducts = [...products];

        if(search) {
            sortedProducts = sortedProducts.filter((product) => {
                return product.title.startsWith(search)
            })
        } 
        if(limit){
            sortedProducts = sortedProducts.slice(0,Number(limit))
        }
        if(sortedProducts.length < 1){
            return res.status(200).json({ success: true, data:[]})
        }
        return res.status(200).json(sortedProducts)

        
})



app.listen(5000, () => {
    console.log('Server is running PORT: 5000...');
})