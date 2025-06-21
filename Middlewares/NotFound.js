function NotFound(req, res) {
  console.log("NotFound reached:", req.method, req.originalUrl);
  res.status(404).json({ error: "NOT-FOUND", message: "Result not Found" });
}
module.exports = NotFound;
