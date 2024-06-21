const Header = ({ course }) => <h1>{course}</h1>
const Content = ({ content }) => {
  return (
    <>
    {content.map(part => 
      <Part  key={part.name} title={part.name} nro_exercises={part.exercises} />
    )}
    </>
  )
}
const Part = ({ title, nro_exercises }) => <p>{title} {nro_exercises}</p>
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