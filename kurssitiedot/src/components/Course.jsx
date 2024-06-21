const Header = ({ course }) => <h2>{course}</h2>
const Content = ({ content }) => {
  return (
    <ul>
    {content.map(part => 
      <Part  key={part.id} title={part.name} nro_exercises={part.exercises} />
    )}
    </ul>
  )
}
const Part = ({ title, nro_exercises }) => <li>{title} {nro_exercises}</li>
const Total = ({ sum }) => <h3>total of exercises {sum}</h3>

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total sum={course.parts.reduce((sum, {exercises}) => sum + exercises, 0)} />
    </>
  )
}
export default Course