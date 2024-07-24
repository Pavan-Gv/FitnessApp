import React, { useState } from 'react';

const AddWorkoutForm = ({ onAddWorkout }) => {
  const [date, setDate] = useState('');
  const [workoutDuration, setWorkoutDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && workoutDuration && caloriesBurned) {
      onAddWorkout({ date, workoutDuration: Number(workoutDuration), caloriesBurned: Number(caloriesBurned) });
      setDate('');
      setWorkoutDuration('');
      setCaloriesBurned('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Workout Duration (min)"
        value={workoutDuration}
        onChange={(e) => setWorkoutDuration(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Calories Burned"
        value={caloriesBurned}
        onChange={(e) => setCaloriesBurned(e.target.value)}
        required
      />
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default AddWorkoutForm;
