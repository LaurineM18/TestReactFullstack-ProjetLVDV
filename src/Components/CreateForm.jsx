import React, { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateForm() {
    const [nom, setNom] = useState("");
    const [thème, setThème] = useState("");
    const [doubleThème, setDoubleThème] = useState("");
    const [prix, setPrix] = useState("");
    const [nouveauté, setNouveauté] = useState("Nouveauté");
    const [format, setFormat] = useState("");
    const [option, setOption] = useState("");
    const [disponibilité, setDisponibilité] = useState("Disponible");
    const [description, setDescription] = useState("");




    async function createVitrine() {
        axios
            .post("http://localhost:3001/vitrines/creer", {
                nom: nom,
                thème: thème,
                doubleThème: doubleThème,
                nouveauté: nouveauté,
                prix: prix,
                format: format,
                option: option,
                disponibilité: disponibilité,
                description: description
            })
            .then(() => {
                console.log({thème});
                toast.success("Enregistré !");
            })
            .catch((err) => toast.error("Erreur d'enregistrement !"));


    }

    const submit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>Tableau de bord</h1>
            <button><NavLink to="/dashboard/listeVitrines" >Voir la liste des produits</NavLink></button>
            <h2>Enregistrer un nouveau produit</h2>
            <form onSubmit={submit} className='form_container'>
                <label htmlFor="nom">Nom</label>
                <input
                    className='input'
                    type="text"
                    placeholder='Nom de la vitrine'
                    value={nom}
                    onChange={(event) => setNom(event.target.value)}
                />
                <label htmlFor="thème">Thème</label>
                <input
                    className='input'
                    type="text"
                    placeholder='Le thème'
                    value={thème}
                    onChange={(event) => setThème(event.target.value)}
                />
                
                <label htmlFor="doubleThème">Double Thème</label>
                <input
                    className='input'
                    type="text"
                    placeholder='2ème thème'
                    value={doubleThème}
                    onChange={(event) => setDoubleThème(event.target.value)}
                />
                <label htmlFor="prix">Prix</label>
                <input
                    className='input'
                    type="number"
                    placeholder="Prix de la vitrine"
                    value={prix}
                    onChange={(event) => setPrix(event.target.value)}
                />
                <label htmlFor="nouveauté">Nouveauté</label>
                <input
                    className='input'
                    type="text"
                    placeholder=""
                    value={nouveauté}
                    onChange={(event) => setNouveauté(event.target.value)}
                />
                <label htmlFor="format">Format</label>
                <select value={format} onChange={(event) => setFormat(event.target.value)}>
                    <option selected value="">Choisir un format</option>
                    <option selected value="cloche">Cloche</option>
                    <option value="boîte">Boîte</option>
                    <option value="cube plexi">Cube Plexi</option>
                    <option value="terrarium">Terrarium</option>
                    <option value="autre">Autre</option>
                </select>
                <label htmlFor="option">Option</label>
                <select value={option} onChange={(event) => setOption(event.target.value)}>
                    <option value=""></option>
                    <option value="electrifiée">Electrifiée</option>
                </select>
                <label htmlFor="disponibilité">Disponibilité</label>
                <input
                    className='input'
                    type="text"
                    placeholder=""
                    value={disponibilité}
                    onChange={(event) => setDisponibilité(event.target.value)}
                />
                <label htmlFor="description">Description</label>
                <input
                    className='input'
                    type="text"
                    placeholder="Description de la vitrine"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <button className='btn btn_form' onClick={createVitrine}>Envoyer</button>
                <ToastContainer autoClose={3000} />
            </form>

        </div>
    )
}
