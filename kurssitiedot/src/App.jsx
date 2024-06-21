import Course from "./components/Course"

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Uusi testikurssi',
        exercises: 2
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
      <Total sum={course.parts.reduce((ex, {exercises}) => ex + exercises, 0)} />
    </div>
  )
}

export default App