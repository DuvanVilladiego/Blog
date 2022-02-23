const { sequelize } = require("../../../db/index");
const { QueryTypes } = require("sequelize");

export default async function forms(req, res) {
  if (req.method === "POST") {
    const {name, lastname, email, password, photo} = req.body;
    await sequelize
      .query(`INSERT ${(name, lastname, email, password, photo)} INTO users`, {
        type: QueryTypes.INSERT,
      })
      .then((users) => {
        console.log(users);
        res.json(users);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  } else if (req.method === "PUT") {
    const {id, name, lastname, email, password, photo} = req.body;
    await sequelize
      .query(`UPDATE users SET name=${name},lastname=${lastname},email=${email},photo=${photo},password=${password} WHERE id=${id}`, {
        type: QueryTypes.UPDATE,
      })
      .then((users) => {
        console.log(users);
        res.json(users);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  } else {
    res.json({message:`This route can be fetched by ${req.method} method`})
  }
}
