let mongoose = require ("mongoose");

const vitrineSchema = new mongoose.Schema({
    nom : {type : String, unique : true},
    thème : String,
    doubleThème : String,
    nouveauté : String,
    format : String,
    option : String,
    prix : Number,
    disponibilité : String,
    description : String
});

const Vitrine = mongoose.model("Vitrine", vitrineSchema);

module.exports = Vitrine;