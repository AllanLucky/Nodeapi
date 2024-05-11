const dbConfig = require('../Config/dbConfig')

const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DATABASE,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false // if Errors in your code will overwrite the Errors using this line of code.
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('databse connection succesfull...')
})
.catch(err =>{
    console.log('Error'+ err)
})


const db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./ProductModel.js')(sequelize, DataTypes)
db.Transaction = require('./TransactionModel.js')(sequelize, DataTypes)
db.Users = require('./AuthModel.js')(sequelize, DataTypes)



db.sequelize.sync({force: false})
.then(()=>{
    console.log('re-sync done')
})


module.exports = db;