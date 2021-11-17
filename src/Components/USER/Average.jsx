import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/mockedApi';
import AverageSessionsModel from '../../ClassModels/averageSessionsModel';
import propTypes from 'prop-types';

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
  // GET user ID from URL PARAMS
  userId = useParams().id;

  // GET user AVERAGE SESSIONS data from FETCH
  const { data, isLoading } = useFetch(`${userId}/average-sessions.json`);
  // console.log(data);
  // FORMATE user AVERAGE SESSIONS data with CLASS MODEL
  const formatedData = new AverageSessionsModel(data);
  const average = formatedData.sessions;

  // CONVERT days numeric value INTO string first letter
  function getSessions() {
    if (!isLoading) {
      average.forEach((item, index) => {
        // GET DATE OF LAST SEVEN DAYS (today included)
        // complete anglo-saxon format date
        item.day = new Date();
        // date of the last seven days (today included)
        item.day.setDate(item.day.getDate() - index);

        const options = {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
          weekday: 'narrow',
        };

        // french format date matched with options (day first letter, jj/mm/aa)
        item.day = new Intl.DateTimeFormat('fr', options).format(item.day);
        // french day first letter
        item.day = item.day[0];
      });
      return average.reverse();
    }
  }

  // LINE CHART TO DISPLAY AVERAGE SESSIONS //////////
  return (
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
            stroke="rgba(255, 255, 255, 0.9)"
            tickLine={false}
            dy={10}
          />
          <YAxis
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.9)"
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
            stroke="rgba(255, 255, 255, 0.9)"
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
 Average.propTypes = {
  userId: propTypes.string,
};

CustomTooltip.propTypes = {
  active: propTypes.bool,
  payload: propTypes.array,
};
