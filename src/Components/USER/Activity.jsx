import propTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/mockedApi';

import ActivityModel from '../../ClassModels/activityModel';

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
  // GET user ID from URL PARAMS
  userId = useParams().id;

  // GET user DAILY ACTIVITY data from FETCH
  const { data, isLoading } = useFetch(`${userId}/activity.json`);
  // FORMATE user DAILY ACTIVITY data with CLASS MODEL
  const formatedData = new ActivityModel(data);
  const activity = formatedData.sessions;

  function getActivity() {
    if (!isLoading) {
      activity.forEach((item, index) => {
        // GET DATE OF LAST SEVEN DAYS (today included)
        // complete anglo-saxon format date
        item.day = new Date();
        // date of the last seven days (today included)
        item.day.setDate(item.day.getDate() - index);

        // let options = {
        const options = {
          month: '2-digit',
          day: '2-digit',
        };

        // french format date matched with options : jj/mm
        item.day = new Intl.DateTimeFormat('fr', options).format(item.day);
        // console.log(item.day);
      });
      return activity.reverse();
    }
  }

  // BAR CHART TO DISPLAY DAILY ACTIVITY //////////
  return (
    <div className="daily-activity">
      <h3 className="daily-activity--title">Activité quotidienne</h3>
      <ResponsiveContainer>
        <BarChart data={getActivity()} barGap={8}>
          <XAxis dataKey="day" stroke="grey" tickLine={false} dy={10} />
          <YAxis
            yAxisId="poids"
            dataKey="kilogram"
            domain={['dataMin -2', 'dataMax + 1']}
            orientation="right"
            axisLine={false}
            tickLine={false}
            dx={10}
            dy={-4}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            domain={['dataMin -20', 'dataMax + 20']}
            orientation="left"
            axisLine={false}
            tickLine={false}
            dx={-10}
            dy={-4}
          />
          <Tooltip wrapperStyle={{ width: 130 }} content={<CustomTooltip />} />
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
  );
}

/**
 * Render CustomTooltip component
 * @function CustomTooltip
 * @param {bollean} active > hover ? y/n
 * @param {array} payload > data to display
 * @returns {JSX}
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
 * PropTypes DailyActivity component
 */
 DailyActivity.propTypes = {
  userId: propTypes.string,
};

CustomTooltip.propTypes = {
  active: propTypes.bool,
  payload: propTypes.array,
};
