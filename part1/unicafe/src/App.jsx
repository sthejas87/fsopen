import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);
  const all = good + neutral + bad;
  const score = good - bad;
  const average = all === 0 ? 0 : score / all;
  const positive = all === 0 ? 0 : (good / all) * 100;
  return (
    <div>
      <Header title={"give feedback"} />
      <Button handleClick={increaseGood} text={"good"} />
      <Button handleClick={increaseNeutral} text={"neutral"} />
      <Button handleClick={increaseBad} text={"bad"} />
      <Header title={"statistics"} />
      {all > 0 ? (
        <>
          <tr>
            <StatisticLine text={"good"} value={good} />
          </tr>
          <tr>
            <StatisticLine text={"neutral"} value={neutral} />
          </tr>
          <tr>
            <StatisticLine text={"bad"} value={bad} />
          </tr>
          <tr>
            <StatisticLine text={"all"} value={all} />
          </tr>
          <tr>
            <StatisticLine text={"average"} value={average.toFixed(2)} />
          </tr>
          <tr>
            <StatisticLine
              text={"positive"}
              value={positive.toFixed(2) + "%"}
            />
          </tr>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
