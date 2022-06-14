import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  const increment = () => setState((prev) => prev + 1);
  const decrement = () => setState((prev) => prev - 1);

  return (
    <div className='App'>
      <h1>value = {state}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
