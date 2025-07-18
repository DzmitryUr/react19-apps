import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  console.log('Counter Re-Rendered!');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
