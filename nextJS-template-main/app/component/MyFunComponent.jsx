import { useState } from 'react';

export const MyFunComponent = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{props.text.toUpperCase()}</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
