import React from 'react';
import propTypes from 'prop-types';

import Icons from './Icons';
import Yoga from '../../Assets/icon_yoga.svg';
import Swim from '../../Assets/icon_swim.svg';
import Cycling from '../../Assets/icon_cycling.svg';
import Bobybuilding from '../../Assets/icon_bodybuilding.svg';

import '../../Styles/sidebar.css';

/**
 * Render the Sidebar component
 * @function Sidebar
 * @param {object} props
 * @param {string} props.activities > icons src
 * @param {string} props.activityName > activity name
 * @param {string} props.copyright > copyright text
 * @param {string} props.index > key number
 * @returns {Reactnode} jsx injected in DOM
 */

export default function Sidebar(activities, activityName, copyright) {
  activities = [Yoga, Swim, Cycling, Bobybuilding];
  activityName = ['yoga', 'natation', 'cyclisme', 'musculation'];
  copyright = 'Copyright, SportSee 2020';

  return (
    <nav className="sidebar">
      {activities.map((icon, index) => (
        <div key={index} className="sidebar-items">
          <Icons icon={icon} alt={'icone ' + activityName[index]} />
        </div>
      ))}
      <span className="copyright">{copyright}</span>
    </nav>
  );
}

/**
 * PropTypes Icons component
 */
Icons.propTypes = {
  icon: propTypes.string.isRequired,
  index: propTypes.number,
};
