'use client'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  {
    name: '1',
    Actual: 300,
    Anterior: 100,
  },
  {
    name: '2',
    Actual: 240,
    Anterior: 120,
  },
  {
    name: '3',
    Actual: 340,
    Anterior: 100,
  },
  {
    name: '4',
    Actual: 400,
    Anterior: 80,
  },
  {
    name: '5',
    Actual: 490,
    Anterior: 90,
  },
  {
    name: '6',
    Actual: 610,
    Anterior: 120,
  },
  {
    name: '7',
    Actual: 700,
    Anterior: 90,
  },
  {
    name: '8',
    Actual: 820,
    Anterior: 120,
  },
  {
    name: '9',
    Actual: 900,
    Anterior: 80,
  },
  {
    name: '10',
    Actual: 830,
    Anterior: 400,
  },
  {
    name: '11',
    Actual: 710,
    Anterior: 180,
  },
  {
    name: '12',
    Actual: 800,
    Anterior: 170,
  },
  {
    name: '13',
    Actual: 500,
    Anterior: 101,
  },
  {
    name: '14',
    Actual: 770,
    Anterior: 210,
  },
  {
    name: '15',
    Actual: 810,
    Anterior: 300,
  },
  {
    name: '16',
    Actual: 870,
    Anterior: 200,
  },
  {
    name: '17',
    Actual: 909,
    Anterior: 160,
  },
  {
    name: '18',
    Actual: 817,
    Anterior: 108,
  },
  {
    name: '19',
    Actual: 950,
    Anterior: 133,
  },
  {
    name: '20',
    Actual: 800,
    Anterior: 220,
  },
  {
    name: '21',
    Actual: 931,
    Anterior: 231,
  },
  {
    name: '22',
    Actual: 1039,
    Anterior: 108,
  },
  {
    name: '23',
    Actual: 1340,
    Anterior: 301,
  },
  {
    name: '24',
    Actual: 1043,
    Anterior: 103,
  },
  {
    name: '25',
    Actual: 938,
    Anterior: 195,
  },
  {
    name: '26',
    Actual: 833,
    Anterior: 355,
  },
  {
    name: '27',
    Actual: 790,
    Anterior: 357,
  },
  {
    name: '28',
    Actual: 890,
    Anterior: 200,
  },
  {
    name: '29',
    Actual: 809,
    Anterior: 309,
  },
  {
    name: '30',
    Actual: 1019,
    Anterior: 210,
  },
];

export default class DailyRenueve extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="Actual" stroke="oklch(var(--s))" fill="oklch(var(--s))" />
          <Area type="monotone" dataKey="Anterior" stroke="oklch(var(--p))" fill="oklch(var(--p))" activeDot={{ r: 8 }} />
          
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}