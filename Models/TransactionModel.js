module.exports=(sequelize, DataTypes)=>{

    const Transaction = sequelize.define('transaction',{
        Transaction_Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        CustomerName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Purchased: {
            type: DataTypes.STRING,
            allowNull: false
        },
        TotalAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        PaymentMethod: {
            type: DataTypes.STRING,
            allowNull: false
        },
        TransactionStatus: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });


    return Transaction;

}