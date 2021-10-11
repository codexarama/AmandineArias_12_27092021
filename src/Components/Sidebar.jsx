import React from 'react';
import Items from './Icons';
import Yoga from '../Assets/icon_yoga.svg';
import Swim from '../Assets/icon_swim.svg';
import Cycling from '../Assets/icon_cycling.svg';
import Bobybuilding from '../Assets/icon_bodybuilding.svg';
import '../Styles/sidebar.css';

const activities = [Yoga, Swim, Cycling, Bobybuilding];

export default function Sidebar({ activityName, copyright }) {
  activityName = ['yoga', 'natation', 'cyclisme', 'musculation'];
  copyright = 'Copyright, SportSee 2020';

  return (
    <nav className="sidebar">
      {activities.map((icon, index) => (
        <div key={index} className="sidebar-item">
          <Items icon={icon} alt={'icone ' + activityName[index]} />
        </div>
      ))}
      <span className="copyright">{copyright}</span>
    </nav>
  );
}
