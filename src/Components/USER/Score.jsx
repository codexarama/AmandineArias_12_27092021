import React from 'react';
import Erreur404 from '../../Pages/Erreur404';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/api';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Score() {
  // GET USER ID FROM URL PARAMS
  let userId = useParams().id;

  // GET user SCORES data from FETCH
  const url = 'http://localhost:3000/user/';
  const { data, isLoading, hasError } = useFetch(`${url}${userId}`);

  const score = data.todayScore || data.score;
  // REMARK !!!
  // THE API HAS AN ERROR IN DATA NAMING
  // ONCE "todayScore" ONCE "score"
  const userScore = [{ value: score }, { value: 1 - score }];

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
          <p className="score-result">{score * 100}%</p>
          <p className="score-comment">de votre <br/> objectif</p>

          <ResponsiveContainer>
            <PieChart width={730} height={250}>
              <Pie
                data={userScore}
                dataKey="value"
                innerRadius={70}
                outerRadius={80}
                startAngle={90} // centre haut
                endAngle={450} // 360° + 90°
                fill="transparent"
                stroke="transparent"
                animationDuration={700}
              >
                <Cell fill="red" cornerRadius={50} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}
