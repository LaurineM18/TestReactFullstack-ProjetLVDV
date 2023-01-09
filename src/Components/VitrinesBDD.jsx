import React, { useState } from 'react'
import {NavLink} from 'react-router-dom';

export default function VitrinesBDD(props) {

    let cardVitrine = props.vitrines.map((e) =>
        <div className='card'>
                <img class='img_card' src="../../assets/images/koalas.JPG" alt="" />
                <p className='title_vitrine'>{e.nom}</p>
                <p className='price_vitrine'>{e.prix}€</p>
                <button className='btn_detail_vitrine'><NavLink to="/detail" className='link_detail_vitrine'><img className='eye_png' src='../assets/images/eye.png'></img>Voir la fiche</NavLink></button>
            </div>
    )


    return (
        <div className='cards_vitrines_container'>
            {cardVitrine}
        </div>
    )
}
