import { useState } from 'react';
import Statistics from './components/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [netural, setNetural] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = () => {
    const _good = good + 1;
    setGood(_good);
    setAll(_good + bad + netural);
  };

  const handlebad = () => {
    const _bad = bad + 1;
    setBad(_bad);
    setAll(_bad + good + netural);
  };

  const handleNetural = () => {
    const _netural = netural + 1;
    setNetural(_netural);
    setAll(_netural + bad + good);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNetural}>netural</button>
      <button onClick={handlebad}>bad</button>

      <h1>Statistics</h1>
      {all === 0 ? (
        <div>No Feedback Given</div>
      ) : (
        <Statistics good={good} bad={bad} netural={netural} all={all} />
      )}
    </div>
  );
}

export default App;

