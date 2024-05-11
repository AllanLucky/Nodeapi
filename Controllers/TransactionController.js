const db = require('../Models/IndexStart')

// use the Model

const Transaction = db.Transaction


module.exports={

    //add Transaction

    addTransaction :async(req, res, next)=>{

        try {
            let info = {

                CustomerName: req.body.CustomerName,
                Purchased: req.body.Purchased,
                TotalAmount: req.body.TotalAmount,
                PaymentMethod: req.body.PaymentMethod,
                TransactionStatus: req.body.TransactionStatus
            }

            const addTransaction = await Transaction.create(info)
            res.status(200).send(addTransaction)
        } catch (error) {
            next(error)
        }

    },

}