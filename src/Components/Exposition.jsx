import React, { useState } from 'react'

export default function Exposition() {
    const [mail, setMail] = useState("");
    const submit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <h1>Ma prochaine exposition</h1>
            <div className='infos_expo'>
                <div className='text-expo'>
                    <h2>Retrouvez moi au Marché de Noël de VILLE</h2>
                    <h3>Le 3 et 4 décembre 2022</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate beatae vitae magni totam quam qui. At tempore sed veritatis, voluptatem, officia ducimus nesciunt quae laborum illum iusto similique amet optio. </p>
                    <p>CARTE GOOGLE MAPS</p>
                </div>
                <img class='flyer' src="../../assets/images/koalas.JPG" alt="Flyer" />
            </div>
            <div className='email_container'>
                <p>Pour restez informé(e) de mes prochaines expositions, laissez-moi votre email :</p>
                <form onSubmit={submit} className='form_email_container'>
                    <input
                        className='input_email'
                        type="mail"
                        placeholder='Votre mail'
                        value={mail}
                        onChange={(event) => setMail(event.target.value)}
                    />
                    <button className='btn btn_mail'>Recevoir les prochaines dates d'expositions</button>
                </form>
            </div>
        </div>
    )
}
