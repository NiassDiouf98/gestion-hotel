const express = require('express');
const Hotel = require('../models/hotel.model.js');
const router = express.Router();
const { getHotels, getHotel, createHotel, updateHotel, deleteHotel } = require('../controllers/hotel.controller.js');
const multer = require('multer');

// Configuration de multer pour le stockage des images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Dossier où les images seront stockées
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Renommer le fichier avec un timestamp
  }
});

const upload = multer({ storage: storage });

// Routes
router.get('/', getHotels);
router.get('/:id', getHotel);
router.post('/', upload.single('image'), createHotel); // Middleware pour gérer l'upload d'image
router.put('/:id', upload.single('image'), updateHotel); // Middleware pour gérer l'upload d'image
router.delete('/:id', deleteHotel);

module.exports = router;