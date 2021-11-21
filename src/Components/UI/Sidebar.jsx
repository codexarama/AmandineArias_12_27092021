import { NavLink, useRouteMatch } from 'react-router-dom';
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
  let { url } = useRouteMatch();

  activities = [Yoga, Swim, Cycling, Bobybuilding];
  activityName = ['Yoga', 'Natation', 'Cyclisme', 'Musculation'];
  copyright = 'Copyright, SportSee 2020';

  return (
    <nav className="sidebar">
      {activities.map((icon, index) => (
        <NavLink
          to={`${url}/${activityName[index]}`}
          key={index}
          className="sidebar-items"
          activeclassname="active"
        >
          <Icons icon={icon} alt={'icone ' + activityName[index]} />
        </NavLink>
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
