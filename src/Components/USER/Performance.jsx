import React from 'react';

import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/api';

import Chargement from '../../Pages/Chargement';
import Inconnu from '../../Pages/Inconnu';

import {
  ResponsiveContainer,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
} from 'recharts';

// RADAR CHART //////////

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
export default function Performance() {
  // GET USER ID FROM URL PARAMS
  let userId = useParams().id;

  // GET user PERFORMANCES data from FETCH
  const { data, isLoading, hasError } = useFetch(`${userId}/performance`);

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
    for (let i = 0; i < performance.length; i++) {
      performance[i].kind = kind[i];
      // performance[i].kind = data.kind[i + 1];
      // values from fetched data are in english and lower case...
      // it doesn't match with expected values from the dashboard prototype
    }
    return performance;
  }

  return <>
    {/* MANAGE loading CASES */}
    {isLoading ? (
      <Chargement />
    ) : !(hasError || !userId) ? (
      // DISPLAY PERFORMANCES CONTENT
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
    ) : (
      <Inconnu />
    )}
  </>;
}
