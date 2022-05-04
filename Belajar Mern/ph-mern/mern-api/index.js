const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const authRoutes = require('./src/routes/auth')
const blogRoutes = require('./src/routes/blog')
// const productRoutes = require('./src/routes/products');

// Body Parser
app.use(bodyParser.json()) // type JSON

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/v1/auth', authRoutes)
app.use('/v1/blog', blogRoutes)
// app.use('/v1/customer', productRoutes)
// app.use('/v2/customer', anotherProductRoutes)

app.listen(4000);

// Check https://codepen.io/arrizkyhp/pen/XWZbarN?editors=1010