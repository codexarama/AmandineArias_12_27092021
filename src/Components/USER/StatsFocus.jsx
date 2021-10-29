import React from 'react';

import logo from '../../Assets/logo.svg';
import Banner from '../UI/Banner';
import DailyActivity from './Activity';
import Average from './Average';
import Performance from './Performance';
import Score from './Score';
import Health from './Health'

import '../../Styles/banner.css';

const mainStyle = {
  marginTop: '6rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40rem',
};

export const statsFocus = [
  {
    path: '/user/:id/activity',
    exact: true,
    strict: true,
    focus: () => (
      <>
        <Banner logo={logo} message="Activité quotidienne" />
        <section
          style={{
            marginTop: '12rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '75%',
          }}
        >
          <DailyActivity />
        </section>
      </>
    ),
  },
  {
    path: '/user/:id/average-sessions',
    exact: true,
    strict: true,
    focus: () => (
      <>
        <Banner logo={logo} message="Sessions moyennes" />
        <section style={mainStyle}>
          <Average/>
        </section>
      </>
    ),
  },
  {
    path: '/user/:id/activities',
    exact: true,
    strict: true,
    focus: () => (
      <>
        <Banner logo={logo} message="Performances" />
        <section style={mainStyle}>
          <Performance />
        </section>
      </>
    ),
  },
  {
    path: '/user/:id/today-score',
    exact: true,
    strict: true,
    focus: () => (
      <>
        <Banner logo={logo} message="Score du jour" />
        <section style={mainStyle}>
          <Score />
        </section>
      </>
    ),
  },
  {
    path: '/user/:id/key-data',
    exact: true,
    strict: true,
    focus: () => (
      <>
        <Banner logo={logo} message="Indicateurs physiologiques" />
        <section style={mainStyle}>
          <Health />
        </section>
      </>
    ),
  },
];
