import { useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  console.log('Parent Re-Rendered!');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Re-Render Parent</button>
      <Child />
    </div>
  );
}

function Child() {
  console.log('Child Re-Rendered!');
  return <h1>Hello</h1>;
}

export default Parent;
