import React from 'react';
import propTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/api';

import Chargement from '../../Pages/Chargement';
import Erreur404 from '../../Pages/Erreur404';
import Inconnu from '../../Pages/Inconnu';

import '../../Styles/graphs.css';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

// BAR CHART //////////

/**
 * Render DailyActivity component
 * @function DailyActivity
 * @param {number} userId > user id number
 * @param {object} props
 * @param {object} props.data > user daily activity infos || error object || error (data loading failure)
 * @param {boolean} props.data > props.data exists ? y/n
 * @param {boolean} isLoading > props.data is an error object ? y/n
 * @param {boolean} hasError > props.data loading has failed ? y/n
 * @returns {Reactnode} jsx injected in DOM
 */
export default function DailyActivity(userId) {
  // GET USER ID FROM URL PARAMS
  userId = useParams().id;

  // GET user DAILY ACTIVITY data from FETCH
  const { data, isLoading, hasError } = useFetch(`${userId}/activity`);
  // console.log(data);

  // CONVERT yyyy-mm-dd date format INTO jj/mm
  if (!isLoading) {
    data.sessions.forEach((date) => {
      // eslint-disable-next-line no-unused-vars
      let [yyyy, mm, dd] = date.day.split('-');
      date.name = `${dd}/${mm}`;
    });
    // console.log(data);
  }

  return (
    <>
      {/* MANAGE loading CASES */}
      {isLoading ? (
        <Chargement />
      ) : hasError ? (
        <Erreur404 />
      ) : data ? (
        // DISPLAY DAILY ACTIVITY CONTENT
        <div className="daily-activity">
          <h3 className="daily-activity--title">Activité quotidienne</h3>
          <ResponsiveContainer>
            <BarChart data={data.sessions} barGap={8}>
              <XAxis dataKey="name" stroke="grey" tickLine={false} dy={10} />
              <YAxis
                yAxisId="poids"
                domain={['dataMin -2', 'dataMax + 1']}
                orientation="right"
                axisLine={false}
                tickLine={false}
                dx={10}
                dy={-4}
              />
              <YAxis
                yAxisId="calories"
                domain={['dataMin -20', 'dataMax + 20']}
                orientation="left"
                axisLine={false}
                tickLine={false}
                dx={-10}
                dy={-4}
              />
              <Tooltip
                wrapperStyle={{ width: 130 }}
                content={<CustomTooltip />}
              />
              <Legend
                width={'60%'}
                iconType={'circle'}
                iconSize={'.5rem'}
                wrapperStyle={{
                  top: '-15%',
                  right: '1rem',
                  lineHeight: '40px',
                }}
              />
              <CartesianGrid stroke="#ccc" vertical={false} />
              <Bar
                yAxisId="calories"
                name="Calories brûlées (kCal)"
                dataKey="calories"
                fill="black"
                barSize={8}
                radius={[50, 50, 0, 0]}
              />
              <Bar
                yAxisId="poids"
                name="Poids (kg)"
                dataKey="kilogram"
                fill="red"
                barSize={8}
                radius={[50, 50, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        // DISPLAY UNKNOWN USER PAGE if userId doesn't exist
        <Inconnu />
      )}
    </>
  );
}

/**
 * Render CustomTooltip component
 * @function CustomTooltip
 * @param {bollean} active > hover ? y/n
 * @param {array} payload > data to display
 * @returns {?JSX}
 */

function CustomTooltip({ active, payload }) {
  return active && payload ? (
    <ul className="custom-tooltip">
      <li className="custom-tooltip--calories">{`${payload[1].value} kg`}</li>
      <li className="custom-tooltip--poids">{`${payload[0].value} kCal`}</li>
    </ul>
  ) : null;
}

/**
 * PropTypes Activity component
 */
CustomTooltip.propTypes = {
  active: propTypes.bool,
  payload: propTypes.array,
};
