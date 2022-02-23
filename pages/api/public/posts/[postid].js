const {sequelize} = require("../../../../../db/index");
const { QueryTypes } = require("sequelize");

export default async function getPostById(req, res){
  const { postid } = req.query;
  await sequelize.query(`SELECT * FROM posts WHERE id=${postid}`, { type: QueryTypes.SELECT })
  .then(posts => {
    console.log(posts); 
    res.json(posts[0]);
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  })
  
}