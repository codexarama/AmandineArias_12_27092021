import React from 'react';
import Item from './Items';
import iconYoga from '../Assets/icon_yoga.svg';
import iconSwim from '../Assets/icon_swim.svg';
import iconCycling from '../Assets/icon_cycling.svg';
import iconBobybuilding from '../Assets/icon_bodybuilding.svg';
import {data} from '../services/data'
import '../Styles/sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Item icon={iconYoga} alt={'yoga icon'} />
      <Item icon={iconSwim} alt={'swim icon'} />
      <Item icon={iconCycling} alt={'cycling icon'} />
      <Item icon={iconBobybuilding} alt={'bodybuilding icon'} />
      <Item copyright={data.copyright} />
    </aside>
  );
}
