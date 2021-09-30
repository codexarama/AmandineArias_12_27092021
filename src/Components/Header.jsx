import React from 'react'

export default function Header({firstName, msg}) {
    return (
        <header>
            <h1>Bonjour <span className='user-name'>{firstName}</span></h1>
            <h2 className='welcome-message'>{msg}</h2>
        </header>
    )
}
