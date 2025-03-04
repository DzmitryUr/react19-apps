import { useState, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Advice } from './components/Advice';
import './App.css';
import { fetchAdvice } from './services/api';

function App() {
  const [advicePromise, setAdvicePromise] = useState(fetchAdvice);

  function fetchNextAdvice() {
    setAdvicePromise(fetchAdvice());
  }

  return (
    <ErrorBoundary fallback={<h2>⚠️Something went wrong</h2>}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Advice fetchAdvice={advicePromise} fetchNextAdvice={fetchNextAdvice} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
