const Hotel = require("../models/hotel.model");
const multer = require("multer");
const path = require("path");

// Configuration de multer pour le stockage des images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Renommer le fichier avec un timestamp
  }
});

const upload = multer({ storage: storage }).single('image');

const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.error('Erreur lors de la récupération des hôtels:', error);
    res.status(500).json({ message: 'Erreur interne du serveur.' });
  }
}

const getHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findById(id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hôtel non trouvé.' });
    }
    res.status(200).json(hotel);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'hôtel:', error);
    res.status(500).json({ message: 'Erreur interne du serveur.' });
  }
}

const createHotel = async (req, res) => {
    try {
      const { name, address, email, phone, price, devise } = req.body;
      if (!name || !address || !email || !phone || !price || !devise || !req.file) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
      }
      const hotelData = {
        name,
        address,
        email,
        phone,
        price,
        devise,
        image: req.file.filename // Enregistrer le nom du fichier image
      };
      const hotel = await Hotel.create(hotelData);
      res.status(201).json({ message: 'Hôtel créé avec succès.', hotel });
    } catch (error) {
      console.error('Erreur lors de la création de l\'hôtel:', error);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
}

const updateHotel = async (req, res) => {
  const { id } = req.params;
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de l\'upload de l\'image.' });
    }
    try {
      const hotelData = req.body;
      if (req.file) {
        hotelData.image = req.file.filename; // Mettre à jour le nom du fichier image si une nouvelle image est uploadée
      }
      const hotel = await Hotel.findByIdAndUpdate(id, hotelData, { new: true });
      if (!hotel) {
        return res.status(404).json({ message: 'Hôtel non trouvé.' });
      }
      res.status(200).json({ message: 'Hôtel mis à jour avec succès.', hotel });
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'hôtel:', error);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  });
}

const deleteHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findByIdAndDelete(id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hôtel non trouvé.' });
    }
    res.status(200).json({ message: 'Hôtel supprimé avec succès.' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'hôtel:', error);
    res.status(500).json({ message: 'Erreur interne du serveur.' });
  }
}

module.exports = { 
    getHotels,
    getHotel,
    createHotel,
    updateHotel,
    deleteHotel
};