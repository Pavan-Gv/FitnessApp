import React, { useState } from 'react';

const GoalForm = ({ onSetGoal }) => {
  const [goalType, setGoalType] = useState('calories');
  const [goalAmount, setGoalAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goalAmount) {
      onSetGoal({ goalType, goalAmount: Number(goalAmount) });
      setGoalAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Goal Type:
        <select value={goalType} onChange={(e) => setGoalType(e.target.value)}>
          <option value="calories">Calories</option>
          <option value="duration">Duration (minutes)</option>
        </select>
      </label>
      <input
        type="number"
        placeholder="Goal Amount"
        value={goalAmount}
        onChange={(e) => setGoalAmount(e.target.value)}
        required
      />
      <button type="submit">Set Goal</button>
    </form>
  );
};

export default GoalForm;
