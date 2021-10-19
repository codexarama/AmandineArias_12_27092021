import React from 'react';

import logo from '../Assets/logo.svg';
import Banner from '../Components/UI/Banner';
import User from '../Components/USER/User';

import { USER_INFOS } from '../Services/mockedData';

import '../Styles/accueil.css';
import '../Styles/banner.css';

/**
 * Render Accueil page component
 * @function Accueil
 * @param {object} props
 * @param {string} props.logo > logo src
 * @param {string} props.id > from mocked data
 * @param {string} props.message > string
 * @param {object} mock > mocked data
 * @param {number} id > user id number
 * @param {string} userInfos > user firstName
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Accueil() {
  return (
    <main>
      <Banner logo={logo} message="Bonjour, qui est-ce ?" />
      <section className="users">
        {USER_INFOS.map(({ id, userInfos }) => (
          <User key={id} id={id} name={userInfos.firstName} />
        ))}
      </section>
    </main>
  );
}
