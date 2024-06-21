const Part = ({ title, nro_exercises }) => <p>{title} {nro_exercises}</p>
const Content = ({ content }) => {
  return (
    <>
    {content.map(part => 
      <Part  key={part.name} title={part.name} nro_exercises={part.exercises} />
    )}
    </>
  )
}
const Header = ({ course }) => <h1>{course}</h1>

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content content={course.parts} />
    </>
  )
}
export default Course