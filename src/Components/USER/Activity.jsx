import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/api';
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

export default function DailyActivity() {
  let userId = useParams().id;
  const url = 'http://localhost:3000/user/';
  const { data, isLoading } = useFetch(`${url}${userId}/activity`);

  if (!isLoading) {
    data.sessions.forEach((date) => {
      // eslint-disable-next-line no-unused-vars
      const [yyyy, mm, dd] = date.day.split('-');
      date.name = `${dd}/${mm}`;
    });
    console.log(data);
  }

  return (
    <section className="daily-activity" style={{ width: '75%', height: 300, marginRight: '2rem' }}>
      <h3 className="daily-activity--title" >Activité quotidienne</h3>
      <ResponsiveContainer>
        <BarChart data={data.sessions} barGap={8}>
          <XAxis dataKey="name" stroke="grey" tickLine={false} dy={10} />
          <YAxis
            yAxisId="poids"
            domain={['dataMin -2', 'dataMax + 1']}
            orientation="right"
            axisLine={false}
            tickLine={false}
            dx={10}
            dy={-4}
          />
          <YAxis
            yAxisId="calories"
            domain={['dataMin -25', 'dataMax + 25']}
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
              right: "1rem",
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
    <ul className="custom-tooltip">
      <li className="custom-tooltip--calories">{`${payload[1].value} kg`}</li>
      <li className="custom-tooltip--poids">{`${payload[0].value} kCal`}</li>
    </ul>
  ) : null;
}
