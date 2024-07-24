import React, { useState, useEffect } from 'react';
import WorkoutProgressChart from './components/WorkoutProgressChart.jsx';
import AddWorkoutForm from './components/AddWorkoutForm.jsx';
import GoalForm from './components/GoalForm.jsx';
import TaskTimer from './components/TaskTimer.jsx';
import './App.css';

const App = () => {
  const [workoutData, setWorkoutData] = useState([]);
  const [goal, setGoal] = useState({ goalType: 'calories', goalAmount: 0 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetch('/workoutData.json')
      .then(response => response.json())
      .then(data => setWorkoutData(data));
  }, []);

  useEffect(() => {
    if (goal.goalType && workoutData.length > 0) {
      const total = workoutData.reduce((acc, workout) => {
        if (goal.goalType === 'calories') {
          return acc + workout.caloriesBurned;
        } else if (goal.goalType === 'duration') {
          return acc + workout.workoutDuration;
        }
        return acc;
      }, 0);

      setProgress(Math.min((total / goal.goalAmount) * 100, 100));
    }
  }, [goal, workoutData]);

  const addWorkout = (newWorkout) => {
    setWorkoutData([...workoutData, newWorkout]);
  };

  const handleSetGoal = (newGoal) => {
    setGoal(newGoal);
  };

  return (
    <div className="App">
      <TaskTimer />
      <h1>Fitness Tracker</h1>
      <GoalForm onSetGoal={handleSetGoal} />
      <div>
        Goal: {goal.goalAmount} {goal.goalType}
        <div>Progress: {progress}%</div>
      </div>
      <AddWorkoutForm onAddWorkout={addWorkout} />
      <WorkoutProgressChart data={workoutData} />
      
    </div>
  );
};

export default App;
