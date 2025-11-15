import { useEffect, useState } from 'react';
import './Countdown.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

/**
 * Countdown component that displays time remaining until New Year 2026
 * Updates every second and shows celebration when countdown reaches zero
 */
export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isCelebrating, setIsCelebrating] = useState(false);

  /**
   * Calculates the time remaining until January 1, 2026 00:00:00
   * @returns Object containing days, hours, minutes, seconds, and total milliseconds
   */
  function calculateTimeLeft(): TimeLeft {
    const newYear = new Date('2026-01-01T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = newYear - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      total: difference,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      setTimeLeft(time);

      if (time.total === 0) {
        setIsCelebrating(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isCelebrating) {
    return (
      <div className="celebration">
        <h1>🎉 Happy New Year 2026! 🎊</h1>
        <div className="fireworks">
          <div className="firework"></div>
          <div className="firework"></div>
          <div className="firework"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="countdown-container">
      <h1 className="title">New Year 2026 Countdown</h1>
      <div className="countdown-grid">
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
      <p className="message">Until the New Year! 🎆</p>
    </div>
  );
}
