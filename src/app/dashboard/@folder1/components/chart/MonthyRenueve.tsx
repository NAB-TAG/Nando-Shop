'use client'
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Ene',
    Anterior: 4000,
    Actual: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    Anterior: 3000,
    Actual: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    Anterior: 2000,
    Actual: 9800,
    amt: 2290,
  },
  {
    name: 'Abr',
    Anterior: 2780,
    Actual: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    Anterior: 1890,
    Actual: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    Anterior: 2390,
    Actual: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    Anterior: 3490,
    Actual: 4300,
    amt: 2100,
  },
  {
    name: 'Ago',
    Anterior: 3490,
    Actual: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    Anterior: 3490,
    Actual: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    Anterior: 3490,
    Actual: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    Anterior: 3490,
    Actual: 4300,
    amt: 2100,
  },
  {
    name: 'Dic',
    Anterior: 3490,
    Actual: 4300,
    amt: 2100,
  },
];

export default class MonthyRenueve extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <h4 className="text-2xl">Ganancias Mensuales</h4>
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="0 10" />
          <Bar dataKey="Actual" fill="oklch(var(--p))" background={{ fill: 'oklch(var(--b1))' }} className='bg-primary'/>
          <Bar dataKey="Anterior" fill="oklch(var(--s))" background={{ fill: 'oklch(var(--b1))' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
