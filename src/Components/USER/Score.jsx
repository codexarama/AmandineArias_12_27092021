import React from 'react';
import Erreur404 from '../../Pages/Erreur404';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/api';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

export default function Score() {
  // GET USER ID FROM URL PARAMS
  let userId = useParams().id;

  // GET user SCORES data from FETCH
  const url = 'http://localhost:3000/user/';
  const { data, isLoading, hasError } = useFetch(`${url}${userId}`);
  console.log(data);

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
        // DISPLAY SCORES CONTENT
        <div className="score">
          <h2 className="score-title">Score</h2>
          <p className="score-result">{data.todayScore * 100}%</p>
          {/* RETURN NaN FOR userId : 18 (Cécilia) */}

          <ResponsiveContainer>
            <PieChart width={730} height={250}>
              <Pie
                data={data.todayScore}
                dataKey="todayScore"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}
