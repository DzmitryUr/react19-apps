'use client';
import { use } from 'react';
import './Advice.css';

export function Advice({ fetchAdvice, fetchNextAdvice }) {
  const advice = use(fetchAdvice);
  console.log('advice=', advice);
  return (
    <div className='advice'>
      <span>&#128515; &#128515; &#128515;</span>
      <div>{advice}</div>
      <button onClick={() => fetchNextAdvice()}>Next Advice</button>
    </div>
  );
}
