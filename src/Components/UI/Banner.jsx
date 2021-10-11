import React from 'react'

export default function Banner({logo, message}) {
    return (
        <header>
        <img className="logo" src={logo} alt="logo sport see" />
        <h1 className="welcome-msg">{message}</h1>
      </header>
    )
}
