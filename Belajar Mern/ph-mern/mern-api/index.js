const express = require('express');
const res = require('express/lib/response');

const app = express();
const router = express.Router();

router.use('/products', (req, res, next) => {
    res.json({name: "Arrizky Hasya", email: "arrizkyhp@gmail.com"})
    next();
})

router.use('/price', (req, res, next) => {
    res.json({price: 3000})
    next();
})

// GET Only
router.get('/customers', (req, res, next) => {
    res.json({firstName: "arrizky", lastName: "hasya"})
    next();
})


app.use('/', router)

app.listen(4000);