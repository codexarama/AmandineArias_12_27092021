import React from 'react';
import logo from '../Assets/logo.svg';
import { mock } from '../Services/genericData';
import Banner from '../Components/UI/Banner';
import User from '../Components/USER/Profile';
import '../Styles/accueil.css';

export default function Accueil() {
  return (
    <main className="accueil">
      <Banner logo={logo} message="Bonjour, qui est-ce ?"/>
      <section className="users">
        {mock.map(({ id, userInfos }) => (
          <User key={id} id={id} name={userInfos.firstName} />
        ))}
      </section>
    </main>
  );
}
