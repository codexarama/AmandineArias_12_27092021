import React from 'react';
import Items from './Items';
import Yoga from '../Assets/icon_yoga.svg';
import Swim from '../Assets/icon_swim.svg';
import Cycling from '../Assets/icon_cycling.svg';
import Bobybuilding from '../Assets/icon_bodybuilding.svg';
import '../Styles/sidebar.css';

const activities = [Yoga, Swim, Cycling, Bobybuilding];

export default function Sidebar({ activityName }) {
  activityName = ['yoga', 'natation', 'cyclisme', 'musculation'];

  return (
    <nav className="sidebar">
      {activities.map((icon, index) => (
        <Items key={index} icon={icon} alt={"icone " + activityName[index]} />
      ))}
    </nav>
  );
}
