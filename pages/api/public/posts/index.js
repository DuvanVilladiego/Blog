const { sequelize } = require("../../../../../db/index");
const { QueryTypes } = require("sequelize");

export default async function getPosts(req, res) {
  if (req.method === "GET") {
    await sequelize
      .query(`SELECT * FROM posts`, { type: QueryTypes.SELECT })
      .then((posts) => {
        console.log(posts);
        res.json(posts);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  } else if(req.method === "POST") {
    
  } else if(req.method === "PUT") {

  }
}
