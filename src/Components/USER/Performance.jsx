import React from 'react';
import Erreur404 from '../../Pages/Erreur404';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/api';
import {
  ResponsiveContainer,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from 'recharts';

export default function Performance() {
  // GET USER ID FROM URL PARAMS
  let userId = useParams().id;
  // GET user PERFORMANCES data from FETCH
  const url = 'http://localhost:3000/user/';
  const { data, isLoading, hasError } = useFetch(`${url}${userId}/performance`);

  if (!isLoading) console.log(data);

  return (
    <>
      {/* MANAGE loading CASES */}
      {isLoading ? (
        <span className="alert-msg">Chargement en cours...</span>
      ) : hasError ? (
        <Erreur404 />
      ) : data === undefined ? (
        <span className="alert-msg">
          L'utilisateur que vous recherchez n'est pas enregistré
        </span>
      ) : (
        // DISPLAY PERFORMANCES CONTENT
        <div className="performance" style={{ width: '30%', height: 300 }}>
          <ResponsiveContainer>
            {/* <RadarChart outerRadius={90} data={data}> */}
            <RadarChart outerRadius={90} width={300} height={300} data={data}>
              {/* <RadarChart outerRadius={90} width={"100%"} height={"100%"} data={data}> */}
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name="Lily"
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}
