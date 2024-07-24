import React, { useState, useEffect } from 'react';

const TaskTimer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10); // Update every 10 milliseconds
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
  };

  return (
    <div>
      <h2>Task Timer</h2>
      <div>{formatTime(time)}</div>
      <button onClick={() => setIsActive(true)}>Start</button>
      <button onClick={() => setIsActive(false)}>Pause</button>
      <button onClick={() => { setIsActive(false); setTime(0); }}>Reset</button>
    </div>
  );
};

export default TaskTimer;
