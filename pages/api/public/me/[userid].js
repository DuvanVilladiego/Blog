const {sequelize} = require("../../../../db/index");
const { QueryTypes } = require("sequelize");

export default async function getMyUser(req, res){
  const { userid } = req.query;
  await sequelize.query(`SELECT * FROM users WHERE id=${userid}`, { type: QueryTypes.SELECT })
  .then(user => {
    console.log(user);
    res.json(user[0]);
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  })
  
}