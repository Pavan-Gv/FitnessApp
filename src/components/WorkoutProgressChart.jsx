import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WorkoutProgressChart = ({ data }) => {
  // Calculate weekly and monthly averages from the data

  return (
    <div className="chart-container">
      <h2>Workout Progress</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="workoutDuration" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="caloriesBurned" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WorkoutProgressChart;
