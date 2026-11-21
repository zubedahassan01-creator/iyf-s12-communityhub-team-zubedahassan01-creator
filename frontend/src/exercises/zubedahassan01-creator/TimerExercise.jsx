import { useEffect, useState } from 'react';

export default function TimerExercise() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return undefined;
    const intervalId = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(intervalId);
  }, [running]);
  return <section aria-labelledby="timer-title"><h2 id="timer-title">Elapsed time: {seconds}s</h2><button type="button" onClick={() => setRunning((value) => !value)}>{running ? 'Stop' : 'Start'}</button> <button type="button" onClick={() => { setRunning(false); setSeconds(0); }}>Reset</button></section>;
}
