import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from './Header';
import { data } from '../services/data.js';
import { getUserById } from '../services/api';
import '../Styles/dashboard.css'

export default function Accueil() {
  getUserById(12)
  return (
    <>
      <Sidebar />
      <main>
        <Header firstName={data.firstName} msg={data.msg} />
      </main>
    </>
  );
}
