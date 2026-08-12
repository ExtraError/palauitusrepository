const Header = (props) => {

  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {

  return (
    <div>
          <p>
            {props.name} {props.exercises}
          </p>
              
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part 
        name={props.parts.map(part => part.name)[0]} 
        exercises={props.parts.map(part => part.exercises)[0]}
      />

      <Part 
        name={props.parts.map(part => part.name)[1]}
        exercises={props.parts.map(part => part.exercises)[1]}
      />

      <Part 
        name={props.parts.map(part => part.name)[2]}
        exercises={props.parts.map(part => part.exercises)[2]}
      />
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
          <p>
            Total number of exercises {props.parts.reduce((sum, part) => sum + part.exercises, 0)}                           
          </p>    
    </div>
  )
}





const App = () => {

  const course = 'Half Stack application development'

   const parts = [
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
    }
  ]

  return (
    <div>

      <Header course={course} />

      <Content
      parts={parts}
      />

      <Total 
        parts={parts}
      />

    </div>
  )
}

export default App