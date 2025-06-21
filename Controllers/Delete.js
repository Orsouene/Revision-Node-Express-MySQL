  const connection = require("../Connection/connection");
  function destroy(req, res) {
    const id = req.params.id;
    const aeroporto = req.params.aeroporto;
    const data = ["passengers", "flights", "luggage", "plane", "crew"];
    const ids = [
      "id_passengers",
      "flight_number",
      "id_luggage",
      "id_plane",
      "crew_id",
    ];

    const i = data.indexOf(aeroporto);
    if (i === -1) return res.status(400).json({ error: "invalid data" });
    const query = `DELETE FROM ${aeroporto} WHERE ${ids[i]} = ?`;
    connection.query(query, [id], (err, result) => {
      if (err) throw res.status(400).json({ message: "invalide queery" });
      res.json({ message: "Elimination with sucess", result: result });
    });
  }
  module.exports = destroy;
  
