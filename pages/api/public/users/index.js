const {sequelize} = require("./../../../../db/index");
const { QueryTypes } = require("sequelize");

export default async function getUsers(req, res){
  await sequelize.query(`SELECT id,name,lastname,email,photo FROM users`, { type: QueryTypes.SELECT })
  .then(users => {
    console.log(users);
    res.json(users);
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  })
  
}