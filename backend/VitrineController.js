let Vitrine = require ("./VitrineModel.js");

exports.creerVitrine = async (req, res)=> {
    try {
        let {nom, thème, doubleThème, nouveauté, format, option, prix, disponibilité, description} = req.body;
        let vitrine = await Vitrine.create({nom, thème, doubleThème, nouveauté, format, option, prix, disponibilité, description});
        res.status(200).json(vitrine);
    } catch (err) {
        res.status(400).json(err);  
    }
};

exports.listeVitrines = async (req, res)=>{
    try {
        let vitrines = await Vitrine.find();
        res.status(200).json(vitrines);    
    } catch (err) {
        console.log(err);
    }
};


exports.updateVitrine =  async (req, res)=>{
    try {
        let {id} = req.params;
        let {nom, thème, doubleThème, format, prix, nouveauté, option, disponibilité, description} = req.body; 
        let vitrine = await Vitrine.findById(id);
        vitrine.nom = nom;
        vitrine.thème = thème;
        vitrine.doubleThème = doubleThème;
        vitrine.format = format;
        vitrine.prix = prix;
        vitrine.nouveauté = nouveauté;
        vitrine.option = option;
        vitrine.disponibilité = disponibilité;
        vitrine.description = description;
        vitrine.save();
        res.status(200).json(vitrine);    
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.deleteVitrine = async (req, res)=>{
    try {
        let {id} = req.params;
        let vitrine = await Vitrine.findById(id);
        await vitrine.delete();
        res.status(200).json(vitrine);    
    } catch (err) {
        res.status(400).json(err);
    }
}