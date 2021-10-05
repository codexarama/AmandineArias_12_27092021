import React from 'react'

export default function Header({name, msg}) {
// export default function Header({name}) {

    return (
        <header>
            <h1>Bonjour <span className='user-name'>{name}</span></h1>
            <h2 className='welcome-message'>{msg}</h2>
            {/* <h2 className='welcome-message'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2> */}
        </header>
    )
}

