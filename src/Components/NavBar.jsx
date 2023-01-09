import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

export default function NavBar() {


  return (
    <div class='navbar_container sticky'>
      <div className='logo_container'>
        <img class='logo' src='../../assets/images/LogoFinal.jpg' alt='La Vitrine de Valérie'></img>
      </div>
      <nav class='navlinks_container'>
        <NavLink to="/">Accueil</NavLink>
        <div className='submenu_container'>
        <a href="" className='submenu-title'>Vitrines</a>
        
        <div className='submenu'>
          <a href="">Nouveautés</a>
          <a href="">Personnalisation</a>
          <NavLink to="/vitrines" >Toutes les vitrines</NavLink>
        </div>
        </div>
        <NavLink to="/exposition">Exposition</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <img class="icon" src='../../assets/images/search.png' alt='La Vitrine de Valérie'></img>
      </nav>

    </div>
  )
}
