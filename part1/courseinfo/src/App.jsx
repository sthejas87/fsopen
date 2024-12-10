const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.num}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.part[0].name} num={props.part[0].num} />
      <Part name={props.part[1].name} num={props.part[1].num} />
      <Part name={props.part[2].name} num={props.part[2].num} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.part[0].num + props.part[1].num + props.part[2].num}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part = [
    { name: "Fundamentals of React", num: 10 },
    { name: "Using props to pass data", num: 7 },
    { name: "State of a component", num: 14 },
  ];
  return (
    <div>
      <Header name={course} />
      <Content part={part} />
      <Total part={part} />
    </div>
  );
};

export default App;
