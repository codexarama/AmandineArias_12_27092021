import React from 'react'

export default function Header({name}) {

    return (
        <header>
            <h1>Bonjour <span className='user-name'>{name}</span></h1>
            <h2 className='welcome-message'>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
        </header>
    )
}
