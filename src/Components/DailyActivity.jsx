import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../Services/api';
import '../Styles/graphs.css';

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

export default function DailyActivity() {
  let userId = useParams().id;
  const url = 'http://localhost:3000/user/';
  const { data, isLoading } = useFetch(`${url}${userId}/activity`);

  if (!isLoading) {
    data.sessions.forEach((date) => {
      const [yyyy, mm, dd] = date.day.split('-');
      // console.log([yyyy]);
      date.name = `${dd}/${mm}`;
    });
    console.log(data);
  }

  return (
    <section className="daily-activity" style={{ width: '75%', height: 300, marginRight: '2rem' }}>
      <h3 className="daily-activity--title" >Activité quotidienne</h3>
      <ResponsiveContainer>
        <BarChart data={data.sessions} barGap={8}>
          <XAxis dataKey="name" stroke="grey" dy={10} />
          <YAxis
            yAxisId="poids"
            domain={['dataMin -2', 'dataMax + 1']}
            orientation="right"
            axisLine={false}
            dx={10}
            dy={-4}
          />
          <YAxis
            yAxisId="calories"
            domain={['dataMin -25', 'dataMax + 25']}
            orientation="left"
            axisLine={false}
            dx={-10}
            dy={-4}
          />
          <Tooltip wrapperStyle={{ width: 90 }} content={<CustomTooltip />} />
          <Legend
            width={'60%'}
            iconType={'circle'}
            iconSize={'.5rem'}
            wrapperStyle={{
              top: '-15%',
              right: 0,
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
    </section>
  );
}

function CustomTooltip({ active, payload }) {
  return active && payload ? (
    <div className="custom-tooltip">
      <p className="custom-tooltip--poids">{`${payload[0].value} kg`}</p>
      <p className="custom-tooltip--calories">{`${payload[1].value} kCal`}</p>
    </div>
  ) : null;
}
