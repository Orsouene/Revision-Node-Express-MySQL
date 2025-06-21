const connection = require("../Connection/connection");

function index(req, res) {
  const aeroporto = req.params.aeroporto
  const data = ["passengers", "flights", "luggage", "plane","crew"];
  if (!data.includes(aeroporto)) {
     return res.status(400).json({error:"invalid data"})
  }
  const mysql = `SELECT * FROM  ${aeroporto}`;
  connection.query(mysql, (err, result) => {
    if (err) return res.status(500).json({ error: "query failed" });
    res.json(result);
  });
}

module.exports = index;
