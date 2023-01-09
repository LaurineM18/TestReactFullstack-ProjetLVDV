import React from 'react'
import {NavLink} from 'react-router-dom';


export default function DashBoard() {
  return (
    <div>
      <h1>Tableau de bord</h1>
      <button><NavLink to="/dashboard/creerVitrine" >Enregistrer un produit</NavLink></button>
      <button><NavLink to="/dashboard/listeVitrines" >Voir la liste des produits</NavLink></button>
    </div>
  )
}
