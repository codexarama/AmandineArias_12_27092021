import React from 'react';
import propTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/mockedApi';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

import '../../Styles/graphs.css';

/**
 * Render Average component
 * @function Average
 * @param {number} userId
 * @param {object} props
 * @param {object} props.data > user average sessions infos || error object || error (data loading failure)
 * @param {boolean} props.data > props.data exists ? y/n
 * @param {boolean} isLoading > props.data is an error object ? y/n
 * @param {boolean} hasError > props.data loading has failed ? y/n
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Average(userId) {
  // GET USER ID FROM URL PARAMS
  userId = useParams().id;

  // GET user AVERAGE SESSIONS data from FETCH
  const { data, isLoading } = useFetch(`${userId}/average-sessions`);
  // const { data, isLoading } = useFetch(`${userId}/average-sessions`.json);
  // console.log(data);

  // CONVERT days numeric value INTO string first letter
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  function getSessions() {
    if (!isLoading) {
      for (let i = 0; i < data.sessions.length; i++) {
        data.sessions[i].day = days[i];
      }
    }
    return data.sessions;
  }
  // console.log(data);

  // LINE CHART TO DISPLAY AVERAGE SESSIONS //////////
  return (
    // AVERAGE SESSIONS CONTENT
    <div className="average-sessions">
      <h3 className="average-sessions--title">
        Durée moyenne <br /> des sessions
      </h3>
      <ResponsiveContainer>
        <LineChart
          height={300}
          margin={{ top: 0, right: 20, left: 20, bottom: 20 }}
          data={getSessions()}
        >
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.6)"
            tickLine={false}
            dy={10}
          />
          <YAxis
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            hide={true}
            domain={[0, 'dataMax + 75']}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: 'rgba(255,255,255, 0.6)' }}
          />
          <Line
            dataKey="sessionLength"
            type="monotone"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'rgba(255,255,255, 0.6)',
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  // return (
  //   <>
  //     {/* MANAGE loading CASES */}
  //     {isLoading ? (
  //       <Chargement />
  //     ) : hasError ? (
  //       <Erreur404 />
  //     ) : data ? (
  //       // AVERAGE SESSIONS CONTENT
  //       <div className="average-sessions">
  //         <h3 className="average-sessions--title">
  //           Durée moyenne <br /> des sessions
  //         </h3>
  //         <ResponsiveContainer>
  //           <LineChart
  //             height={300}
  //             margin={{ top: 0, right: 20, left: 20, bottom: 20 }}
  //             data={getSessions()}
  //           >
  //             <XAxis
  //               dataKey="day"
  //               stroke="rgba(255, 255, 255, 0.6)"
  //               tickLine={false}
  //               dy={10}
  //             />
  //             <YAxis
  //               dataKey="sessionLength"
  //               stroke="rgba(255, 255, 255, 0.6)"
  //               hide={true}
  //               domain={[0, 'dataMax + 75']}
  //             />
  //             <Tooltip
  //               content={<CustomTooltip />}
  //               cursor={{ stroke: 'rgba(255,255,255, 0.6)' }}
  //             />
  //             <Line
  //               dataKey="sessionLength"
  //               type="monotone"
  //               stroke="rgba(255, 255, 255, 0.6)"
  //               strokeWidth={2}
  //               dot={false}
  //               activeDot={{
  //                 stroke: 'rgba(255,255,255, 0.6)',
  //                 strokeWidth: 10,
  //                 r: 5,
  //               }}
  //             />
  //           </LineChart>
  //         </ResponsiveContainer>
  //       </div>
  //     ) : (
  //       // DISPLAY UNKNOWN USER PAGE if userId doesn't exist
  //       <Inconnu />
  //     )}
  //   </>
  // );
}

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <span className="custom-tooltip--min">{`${payload[0].value} min`}</span>
    );
  }
  return null;
}

/**
 * PropTypes Average component
 */
CustomTooltip.propTypes = {
  active: propTypes.bool,
  payload: propTypes.array,
};
