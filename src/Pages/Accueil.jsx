import React from 'react';
import logo from '../Assets/logo.svg'
import User from '../Components/User';
import { mock } from '../__MOCK__/mockedData';
import '../Styles/accueil.css';

export default function Accueil() {
  return (
    <main className='accueil'>
      <header>
        <img className="logo" src={logo} alt="logo sport see" />
      <h1 className="welcome-msg">Bonjour, qui est-ce ?</h1>
      </header>
      <section className="users">
        {mock.map(({ id, userInfos }) => (
          <User key={id} id={id} name={userInfos.firstName} />
        ))}
      </section>
    </main>
  );
}
