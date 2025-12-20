import { useEffect, useState } from 'react';
import './CountDown.css';

function calculateTimeLeft(date = '2026-01-01T00:00:00') {
  const futureTime = new Date(date).getTime();
  const now = new Date().getTime();
  const diffirence = futureTime - now;

  if (diffirence <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(diffirence / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diffirence / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diffirence / (1000 * 60)) % 60),
    seconds: Math.floor((diffirence / 1000) % 60),
  };
}

export function CountDown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      setTimeLeft(time);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countDown">
      <h2 className="title">New Year 2026 Countdown</h2>
      <div className="grid">
        <div className="time-box">
          <span className="time-value">{timeLeft.days}</span>
          <span className="time-label">Days</span>
        </div>
        <div className="time-box">
          <span className="time-value">{timeLeft.hours}</span>
          <span className="time-label">Hours</span>
        </div>
        <div className="time-box">
          <span className="time-value">{timeLeft.minutes}</span>
          <span className="time-label">Minutes</span>
        </div>
        <div className="time-box">
          <span className="time-value">{timeLeft.seconds}</span>
          <span className="time-label">Seconds</span>
        </div>
      </div>
    </div>
  );
}
