module.exports=(sequelize, DataTypes)=>{

    const Product = sequelize.define("product",{
        Product_Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ProductName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ProductDescription:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Availability:{
            type: DataTypes.STRING,
            allowNull: false
        },
        QuantityInStock:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Price:{
            type: DataTypes.INTEGER,
            allowNull: false

        },


    });

    return Product;
};