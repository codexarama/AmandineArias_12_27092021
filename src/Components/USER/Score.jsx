import React from 'react';

import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/api';

import Chargement from '../../Pages/Chargement';
import Inconnu from '../../Pages/Inconnu';
import Erreur404 from '../../Pages/Erreur404';

import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// PIE CHART //////////

/**
 * Render Performance component
 * @function DailyActivity
 * @param {number} userId
 * @param {object} props
 * @param {object} props.data > user score infos || error object || error (data loading failure)
 * @param {boolean} props.data > props.data exists ? y/n
 * @param {boolean} isLoading > props.data is an error object ? y/n
 * @param {boolean} hasError > props.data loading has failed ? y/n
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Score() {
  // GET USER ID FROM URL PARAMS
  let userId = useParams().id;

  // GET user SCORES data from FETCH
  const url = 'http://localhost:3000/user/';
  const { data, isLoading, hasError } = useFetch(`${url}${userId}`);
  // console.log(data);

  const score = data.todayScore || data.score;
  // REMARK !!!
  // THE API HAS AN ERROR IN DATA NAMING
  // ONCE "todayScore" ONCE "score"
  const userScore = [{ value: score }, { value: 1 - score }];

  return (
    <>
      {/* MANAGE loading CASES */}
      {isLoading ? (
        <Chargement />
      ) : hasError ? (
        <Erreur404 />
      ) : data === undefined ? (
        <Inconnu />
      ) : (
        // DISPLAY SCORES CONTENT
        <div className="score">
          <h2 className="score-title">Score</h2>
          <p className="score-result">{score * 100}%</p>
          <p className="score-comment">
            de votre <br /> objectif
          </p>

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
