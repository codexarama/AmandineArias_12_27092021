import React from 'react';
import Item from './Items';
import Yoga from '../Assets/icon_yoga.svg';
import Swim from '../Assets/icon_swim.svg';
import Cycling from '../Assets/icon_cycling.svg';
import Bobybuilding from '../Assets/icon_bodybuilding.svg';
import '../Styles/sidebar.css';

export default function Sidebar() {
  const activity = [Yoga, Swim, Cycling, Bobybuilding];
  return (
    <aside className="sidebar">
      {activity.map((sport) => (
        <Item key={sport} icon={sport} alt={`${sport} icon`} />
      ))}
    </aside>
  );
}
