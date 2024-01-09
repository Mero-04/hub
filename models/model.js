const { DataTypes } = require('sequelize');
const sequelize = require("../data/db");

const House = sequelize.define("house", {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    address: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.STRING, allowNull: false },
    house_img: { type: DataTypes.STRING, allowNull: true },
    bedroom: { type: DataTypes.STRING, allowNull: false },
    bathroom: { type: DataTypes.STRING, allowNull: false },
    area: { type: DataTypes.STRING, allowNull: false }
});

const Contact = sequelize.define("contact", {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    subject: { type: DataTypes.STRING, allowNull: false },
    message: { type: DataTypes.TEXT, allowNull: false }
});



module.exports = {
    House,
    Contact
};