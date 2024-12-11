import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Stat = ({ title, vari }) => (
  <p>
    {title} {vari}
  </p>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <Header title={"give feedback"} />
      <Button handleClick={increaseGood} text={"good"} />
      <Button handleClick={increaseNeutral} text={"neutral"} />
      <Button handleClick={increaseBad} text={"bad"} />
      <Header title={"statistics"} />
      <Stat title={"good"} vari={good} />
      <Stat title={"neutral"} vari={neutral} />
      <Stat title={"bad"} vari={bad} />
    </div>
  );
};

export default App;
