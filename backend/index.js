let express = require ("express");
let mongoose = require ("mongoose");
let router = require ("./VitrineRouting.js");
let cors = require("cors")

let app = express();
app.use(cors()) //règle le problème de gestion des 2 serveurs Back et Front

//Fonctions exécutées automatiquement pour requêtes POST et PUT
//Pour décrypter objets encodés dans le body
app.use(express.json()); //app.use() méthode qui applique la fonction pour chaque requête entrante
app.use(express.urlencoded({extended : true}));

let URI = 'mongodb+srv://nom:mdp@cluster0.nwyzec0.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI,
    { useNewUrlParser: true, useUnifiedTopology: true , dbName : "dbname"})
    .then(()=> console.log("Connexion a Mongo réussie !"))
    .catch(()=> console.log("Connexion a Mongo échouée"));


app.use("/vitrines", router);

let port = 3001;
app.listen(port, ()=> console.log("serveur tourne"));


