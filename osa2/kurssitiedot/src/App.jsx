const Course = (props) => {
  
  return (
    <div>
      <Header course={props.course}/>
      <SubHeader course={props.course}/>
      <Content course={props.course}/>
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
      {props.course[0].parts.map(list => 
        <Part
            name={list.name}
            exercises={list.exercises}
            key={list.id}
        />
      )}

      <h3>
        Total of {props.course[0].parts.reduce((sum, part) => sum + part.exercises, 0)} Excercises
      </h3>

      {props.course[1].parts.map(list => 
        <Part
            name={list.name}
            exercises={list.exercises}
            key={list.id}
        />
      )}

      <h3>
        Total of {props.course[1].parts.reduce((sum, part) => sum + part.exercises, 0)} Excercises
      </h3>
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