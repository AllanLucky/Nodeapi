const db = require('../Models/IndexStart')

// Use the models
const Product = db.products


module.exports={

    // add the Student 
    addProduct :async (req, res, next)=>{

        try {
            let info = {
                ProductName: req.body.ProductName,
                ProductDescription: req.body.ProductDescription,
                Availability: req.body.Availability,
                OquantityInStock: req.body.OquantityInStock,
                Price: req.body.Price
            }

            const addProduct = await Product.create(info)
            res.status(200).send(addProduct)
        } catch (error) {
            next(error)
        }
    },

    // get Product by id

    /*getProducts :async (req, res, next)=>{
        
       // try {
            let id = req.params.id
            let product = await Product.findOne({where: {Product_id}})

            if(!product){
                throw(createError(404, "Product does not exist"))
            }
            res.status(200).send(product)
        } catch (error) {
            next()
        }

    },*/

    // getAll the products

    getProducts :async (req, res, next)=>{
        try {
            let allPruducts = await Product.findAll({
                include:[{model: Transaction,attribute:['CustomerName,Purchased,TotalAmount,PaymentMethod, TransactionStatus']}]
            })
            res.send(200).sent(allPruducts)
        } catch (error) {
            next(error)
        }
    },



}
