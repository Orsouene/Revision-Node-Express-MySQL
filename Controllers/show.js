// show.js
const connection = require("../Connection/connection");

function show(req, res) {
  const id = parseInt(req.params.id);
  const aeroporto = req.params.aeroporto;
  const data = ["passengers", "flights", "luggage", "plane"];
  const ids = ["id_luggage", "flight_number", "id_passengers", "id_plane"];

  const i = data.indexOf(aeroporto);
  if (i === -1) return res.status(400).json({ error: "invalid data" });

  const query = `SELECT * FROM ${aeroporto} WHERE ${ids[i]} = ?`;
  connection.query(query, [id], (err, result) => {
    if (err){ console.log(err)
           return res.status(500).json({ message: "invalid query" });}
    if (result.length === 0)
      return res
        .status(404)
        .json({ error: "NOT-FOUND", message: "Result not Found" });
    res.json(result);
  });
}

module.exports = show;

