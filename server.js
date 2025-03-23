const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "feedback_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

// Endpoint untuk mengirim feedback
app.post("/feedback", (req, res) => {
  const { nama, email, pesan } = req.body;
  const query = "INSERT INTO feedback (nama, email, pesan) VALUES (?, ?, ?)";
  db.query(query, [nama, email, pesan], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Feedback terkirim!" });
  });
});

// Endpoint untuk menampilkan semua feedback
app.get("/feedback", (req, res) => {
  db.query("SELECT * FROM feedback", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.listen(5000, () => {
  console.log("Server berjalan di port 5000");
});
