const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.BD_CONNECTION);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado.");
  })
  .catch((err) => {
    console.error("Error de conexion:", err);
  });

module.exports = { sequelize };
