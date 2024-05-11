const express = require('express')
const cors = require('cors')
require('dotenv').config();
require('./Models/IndexStart')
require('./Models/TransactionModel')

const app = express();

const ProductRoute = require('./Routes/ProductRoute');
const TransactionRoute = require('./Routes/TransactionRoute')
const AuthRoute = require('./Routes/AuthRoute')


var corOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corOptions))

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/Products', ProductRoute);
app.use('/Transations', TransactionRoute);
app.use('/Auth', AuthRoute);


const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})





