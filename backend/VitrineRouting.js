let express = require ("express");
let VitrineController = require ("./VitrineController.js");

//permet de réaliser les routings
const router = express.Router();

//Récupère tous les documents (=enregistrement)
router.get("/", VitrineController.listeVitrines);

//Créer un enregistrement
router.post("/creer", VitrineController.creerVitrine)

//Modifier un enregistrement
router.put("/update/:id", VitrineController.updateVitrine)

//pour exporter ce fichier 
module.exports = router;