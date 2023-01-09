import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Home() {
    return (
        <div className='home_container'>
            <section className='heroheader'>
                <img class='vitrine' src="../../assets/images/koalas.JPG" alt="Vitrine Koalas" />
                <div >
                    <h1>Bienvenue sur mon site !</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate beatae vitae magni totam quam qui. At tempore sed veritatis, voluptatem, officia ducimus nesciunt quae laborum illum iusto similique amet optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate beatae vitae magni totam quam qui. At tempore sed veritatis, voluptatem, officia ducimus nesciunt quae laborum illum iusto similique amet optio!</p>
                    <div className='heroheader_btn_container'>
                        <button className='btn btn_allVitrines'>
                        <NavLink to="/vitrines" >Toutes les vitrines</NavLink>
                        </button>
                        <button className='btn btn_personnalisation'>
                            <a href="">La personnalisation</a>
                        </button>
                    </div>
                </div>
            </section>
            <section className='news'>
                <div className='infos_news'>

                    <h1>Mes dernières créations</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nisi repellat asperiores voluptate doloremque molestias optio quod assumenda sequi perferendis quisquam quas impedit, libero praesentium, obcaecati nobis. Quaerat, commodi sunt!</p>
                </div>
            </section>
            <section className='expo'>
                <h1>Ma prochaine exposition</h1>
                <div className='infos_expo'>
                    <img class='flyer' src="../../assets/images/koalas.JPG" alt="Flyer" />
                    <div className='text-expo'>
                        <h2>Nom de l'exposition</h2>
                        <h3>Date et lieu</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate beatae vitae magni totam quam qui. At tempore sed veritatis, voluptatem, officia ducimus nesciunt quae laborum illum iusto similique amet optio. </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
