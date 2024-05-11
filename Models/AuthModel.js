module.exports=(sequelize, DataTypes)=>{

    const User = sequelize.define("User",{
        User_Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Email:{
            type: DataTypes.STRING,
            allowNull: false
        },
       Password:{
            type: DataTypes.STRING,
            allowNull: false
        },

    });

    return User
};