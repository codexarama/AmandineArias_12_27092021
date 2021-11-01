import React from 'react';

import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/mockedApi';

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
  // GET USER ID FROM URL PARAMS
  userId = useParams().id;

  // GET user PERFORMANCES data from FETCH
  // const { data, isLoading } = useFetch(`${userId}/performance`);
  const { data, isLoading } = useFetch(`${userId}/performance`.json);

  // ATTRIBUTE topic values to data main array
  const performance = data.data;
  const kind = [
    'Intensité',
    'Vitesse',
    'Force',
    'Endurance',
    'Energie',
    'Cardio',
  ];

  function getData() {
    if (!isLoading) {
      for (let i = 0; i < performance.length; i++) {
        performance[i].kind = kind[i];
        // values from fetched data are in english and lower case...
        // it doesn't match with expected values from the dashboard prototype
      }
    }
    return performance;
  }

  // RADAR CHART TO DISPLAY PERFORMANCES //////////
  return (
        // PERFORMANCES CONTENT
        <div className="performance">
          <ResponsiveContainer>
            <RadarChart outerRadius={90} data={getData()}>
              <PolarGrid radialLines={false} />
              <PolarAngleAxis
                dataKey="kind"
                domain={[0, 150]}
                dy={5}
                tickLine={false}
                stroke="white"
              />
              <Radar dataKey="value" name=" " fill="red" fillOpacity={0.7} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
  );
}
