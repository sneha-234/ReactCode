import React, { useState  , useRef} from 'react';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
  };

  const handleStartStop = () => {
    if (isRunning) {
      stopStopwatch();
    } else {
      startStopwatch();
    }
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <center>
      <div>{formatTime(time)}</div>
      <button onClick={handleStartStop}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
      
    </center>
  );
};

export default Stopwatch;
