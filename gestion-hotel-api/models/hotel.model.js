const mongoose = require('mongoose');
const HotelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true , "Saisir le nom de l'hotel"]
        },
        address: {
            type: String,
            required: [true, "Saisir l'adresse de l'hotel"]
        },
        email: {
            type: String,
            required: [true, "Saisir l'email de l'hotel"]
        },
        phone: {
            type: String,
            required: [true, "Saisir le numéro de téléphone de l'hotel"]
        },
        price: {
            type: Number,
            required: [true, "Saisir le prix par nuit de l'hotel"],
            min: [0, "Le prix ne peut pas être négatif"],
        },
        devise: {
            type: String,
            required: [true, "Saisir la devise du prix de l'hotel"]
        },
        image: {
            type: String,
            required: [true, "Ajouter une image de l'hotel"]
        },
    },
    {
        timestamps: true,
    }
);
const Hotel = mongoose.model('Hotel', HotelSchema);
module.exports = Hotel;