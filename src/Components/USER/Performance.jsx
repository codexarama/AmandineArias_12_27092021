import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/api';
import PerformanceModel from '../../ClassModels/performanceModel';
import propTypes from 'prop-types';

import {
  ResponsiveContainer,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
} from 'recharts';

/**
 * Render Performance component
 * @function Performance
 * @param {number} userId
 * @param {object} props
 * @param {object} props.data > user performances infos || error object || error (data loading failure)
 * @param {boolean} props.data > props.data exists ? y/n
 * @param {boolean} isLoading > props.data is an error object ? y/n
 * @param {boolean} hasError > props.data loading has failed ? y/n
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Performance(userId) {
  // GET user ID from URL PARAMS
  userId = useParams().id;

  // GET user PERFORMANCES data from FETCH
  const { data, isLoading } = useFetch(`${userId}/performance`);
  // FORMATE user PERFORMANCES data with CLASS MODEL
  const formatedData = new PerformanceModel(data);

  // values from fetched data are in english and lower case...
  // it doesn't match with expected values from the dashboard prototype
  const performance = formatedData.data;

  const category = [
    'Intensité',
    'Vitesse',
    'Force',
    'Endurance',
    'Energie',
    'Cardio',
  ];

  // ATTRIBUTE topic values as NAME to data main array
  function getData() {
    if (!isLoading) {
      performance.forEach((item, index) => {
        item.category = category[index];
      });
    }
    return performance;
  }

  // RADAR CHART TO DISPLAY PERFORMANCES //////////
  return (
    <div className="performance">
      <ResponsiveContainer>
        <RadarChart outerRadius={90} data={getData()}>
          <PolarGrid />
          {/* <PolarGrid radialLines={false} /> */}
          <PolarAngleAxis
            dataKey="category"
            domain={[0, 250]}
            dy={5}
            tickLine={false}
            stroke="white"
          />
          <Radar name="" dataKey="value" fill="red" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

/**
 * PropTypes Performance component
 */
Performance.propTypes = {
  userId: propTypes.string,
};
