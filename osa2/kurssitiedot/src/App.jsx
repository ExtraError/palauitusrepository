const Course = (props) => {
  
  return (
    <div>
      <Header course={props.course}/>
      <SubHeader course={props.course}/>
      <ContentOne course={props.course}/>
      
      <ContentTwo course={props.course}/>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <h1>Web Development curriculum</h1>
    </div>
  )
}

const SubHeader = (props) => {
  return (
    <div>
      <h3>
        {props.course[0].name}
      </h3>
    </div>
  )
}

// Applying what I learn in part1
// Creating universal single component to be distributed inside the component content

const Part = (props) => {
  return (
    <div>
        <p>
          {props.name} {props.exercises}
        </p>
    </div>
  )
}

// Applying Map method rather than index
// on subHeader its an index while below is a map()

// First Object inside an Array

const ContentOne = (props) => {
  return (
    <div>
      <Part 
        name={props.course[0].parts.map(part => part.name)[0]}
        exercises={props.course[0].parts.map(list => list.exercises)[0]}
      />

      <Part 
        name={props.course[0].parts.map(part => part.name)[1]}
        exercises={props.course[0].parts.map(list => list.exercises)[1]}
      />

      <Part 
        name={props.course[0].parts.map(part => part.name)[2]}
        exercises={props.course[0].parts.map(list => list.exercises)[2]}
      />

      <Part 
        name={props.course[0].parts.map(part => part.name)[3]}
        exercises={props.course[0].parts.map(list => list.exercises)[3]}
      />

      <h3>Total of {props.course[0].parts.reduce((sum, list) => sum + list.exercises, 0)} excercises</h3>
      
    </div>
  )
}

// Second Object inside an Array

const ContentTwo = (props) => {
  return (
    <div>
      <Part 
        name={props.course[1].parts.map(part => part.name)[0]}
        exercises={props.course[1].parts.map(list => list.exercises)[0]}
      />

      <Part 
        name={props.course[1].parts.map(part => part.name)[1]}
        exercises={props.course[1].parts.map(list => list.exercises)[1]}
      />

      <h3>Total of {props.course[1].parts.reduce((sum, list) => sum + list.exercises, 0)} excercises</h3>
    </div>
  )
}



const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={courses}/>
    </div>
  )
}

export default App