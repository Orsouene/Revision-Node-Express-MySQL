

const connection = require("../Connection/connection");
function postPassenger (req,res) {
const { first_name, last_name, passport_number, flight_number } = req.body; 
console.log(req.body)
const query =
  "INSERT INTO passengers ( first_name, last_name, passport_number,flight_number  ) VALUES(?,?,?,?)";
  connection.query(
    query,
    [first_name, last_name, passport_number, flight_number],
    (err, result) => {
      if (err) return res.status(500).json({ err: "non valid query" });
      res.status(201).json({ message: "passengers added" });
    }
  );
}
module.exports=postPassenger 

