const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const Hotel = require("./models/hotel.model.js");
const hotelRoute = require("./routes/hotel.route.js");
const multer = require("multer");
const path = require("path");
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Middleware for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  },
});

const upload = multer({ storage: storage });
app.use("/uploads", express.static("uploads")); // Serve uploaded files

// Routes
app.use("/api/hotels", hotelRoute);

// Example route for uploading images
app.post("/api/hotels/uploads", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Aucune image téléchargée." });
  }
  res.status(200).json({ message: "Image téléchargée avec succès.", file: req.file });
});

app.get("/", (req, res) => {
  res.send("Bonjour, from Express.js!");
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // app.listen(3000, () => {
    //   console.log("Server is running on http://localhost:3000");
    // });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

  // Exportez l'application Express pour Vercel
  module.exports = app;

  // Hotel.find({})
  // .then(hotels => {
  //   console.log("📦 Données dans la base :", hotels );
  // })
  // .catch(err => {
  //   console.error("❌ Erreur lors du find :", err);
  // });