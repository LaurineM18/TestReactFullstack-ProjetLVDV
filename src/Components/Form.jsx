import React, { useState } from 'react'

export default function Form() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [mail, setMail] = useState("");
    const [objet, setObjet] = useState("");
    const [message, setMessage] = useState("");
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
      };

    const submit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='form'>
            <h1>Formulaire de contact</h1>
            <form onSubmit={submit} className='form_container'>
                <label htmlFor="nom">Nom</label>
                <input
                    className='input'
                    type="text"
                    placeholder='Votre nom'
                    value={nom}
                    onChange={(event) => setNom(event.target.value)}
                />
                <label htmlFor="prenom">Prénom</label>
                <input
                    className='input'
                    type="text"
                    placeholder='Votre prenom'
                    value={prenom}
                    onChange={(event) => setPrenom(event.target.value)}
                />
                <label htmlFor="mail">Mail</label>
                <input
                    className='input'
                    type="mail"
                    placeholder='Votre mail'
                    value={mail}
                    onChange={(event) => setMail(event.target.value)}
                />
                <label htmlFor="objet">Objet</label>
                <input
                    className='input'
                    type="text"
                    placeholder="L'objet du mail"
                    value={objet}
                    onChange={(event) => setObjet(event.target.value)}
                />
                <label htmlFor="message">Message</label>
                <textarea
                    className='input textarea'
                    placeholder='Votre message'
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
                <div className='checkbox'>
                <label htmlFor="rgpd"></label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(handleChange)}
                />
                <p>Vous autorisez à ce que vos informations soient conservées pour pouvoir être recontacté(e).</p>
                </div>
                <button className='btn btn_form'>Envoyer</button>
            </form>
        </div>
    )
}
