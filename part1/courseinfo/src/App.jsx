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
      <Part name={props.part[0].name} num={props.part[0].exercises} />
      <Part name={props.part[1].name} num={props.part[1].exercises} />
      <Part name={props.part[2].name} num={props.part[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.part[0].exercises +
        props.part[1].exercises +
        props.part[2].exercises}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  const part = [part1, part2, part3];
  return (
    <div>
      <Header name={course} />
      <Content part={part} />
      <Total part={part} />
    </div>
  );
};

export default App;
