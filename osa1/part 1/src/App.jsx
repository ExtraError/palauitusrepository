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
            {props.name1} {props.exercises1}
          </p>
          
          <p>
            {props.name2} {props.exercises2}
          </p>
          
          <p>
            {props.name3} {props.exercises3}
          </p>
              
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part 
        name1={props.part1.name} 
        exercises1={props.part1.exercises}
      />
      <Part 
        name2={props.part2.name}
        exercises2={props.part2.exercises}
      />
      <Part 
        name3={props.part3.name}
        exercises3={props.part3.exercises}  
      />
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
          <p>
            Total number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
          </p>    
    </div>
  )
}





const App = () => {

  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>

      <Header course={course} />

      <Content
      part1={part1}

      part2={part2}  

      part3={part3}
      />

      <Total 
      exercises1={part1.exercises}
      exercises2={part2.exercises}
      exercises3={part3.exercises}
      />

    </div>
  )
}

export default App