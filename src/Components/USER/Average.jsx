import React from 'react';
import Erreur404 from '../../Pages/Erreur404';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/api';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import '../../Styles/graphs.css';

export default function Average() {
  // GET USER ID FROM URL PARAMS
  let userId = useParams().id;

  // GET user AVERAGE SESSIONS data from FETCH
  const url = 'http://localhost:3000/user/';
  const { data, isLoading, hasError } = useFetch(
    `${url}${userId}/average-sessions`
  );

  // CONVERT days numeric value INTO string first letter
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  function getSessions() {
    for (let i = 0; i < data.sessions.length; i++) {
      data.sessions[i].day = days[i];
    }
    return data.sessions;
  }

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
        // DISPLAY AVERAGE SESSIONS CONTENT
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
      )}
    </>
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
