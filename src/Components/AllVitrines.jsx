import React, { useState } from 'react'
import axios from 'axios'
import VitrinesBDD from './VitrinesBDD';


let baseURL = "http://localhost:3001/vitrines/"
export default function AllVitrines() {
    const [vitrine, setVitrine] = useState([]);

    React.useEffect(() => {
        axios.get(baseURL)
            .then((res) => {
                setVitrine(res.data)
            })
            .catch((err) => console.log(err));
        ;
    }, []);

    if (!vitrine) return null;

    function deleteVitrine(){
        axios
            .delete(baseURL)
            .then(()=> console.log("supprimé"))
    }
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Thème</th>
                        <th>Format</th>
                        <th>Prix</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {vitrine.map(e => (
                    <tr>
                        <th>{e.nom}</th>
                        <th>{e.thème}</th>
                        <th>{e.format}</th>
                        <th>{e.prix}€</th>
                        <th>
                            <a href="">Voir</a>
                            <a href="">Modifier</a>
                            <a href="">Supprimer</a>
                            
                        </th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}




