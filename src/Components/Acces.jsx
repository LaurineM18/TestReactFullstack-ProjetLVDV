import React, { useState } from 'react'

export default function Acces() {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const submit = (event) => {
        event.preventDefault();
    }

  return (
    <div className='form'>
            <h1>Se connecter</h1>
            <form onSubmit={submit} className='form_container'>
                <label htmlFor="mail">Mail</label>
                <input
                    className='input'
                    type="mail"
                    value={mail}
                    onChange={(event) => setMail(event.target.value)}
                />
                <label htmlFor="password">Mot de passe</label>
                <input
                    className='input'
                    type="text"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button className='btn btn_form'>Connexion</button>
            </form>
        </div>
  )
}
