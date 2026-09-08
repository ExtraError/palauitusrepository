const Course = ({course}) => {
  
  return (
    <div>
      <Header course={course}/>
      <SubHeader course={course}/>
      <Content course={course}/>
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

const SubHeader = ({course}) => {
  return (
    <div>
      <h3>
        {course[0].name}
      </h3>
    </div>
  )
}


const Part = ({name, exercise}) => {
  return (
    <div>
        <p>
          {name} {exercise}
        </p>
    </div>
  )
}


const Content = ({course}) => {
  
  return (
    <div>
      {course[0].parts.map(({name, exercises, id}) => 
        <Part
            name={name}
            exercises={exercises}
            key={id}
        />
      )}

      <h3>
        Total of {course[0].parts.reduce((sum, {exercises}) => sum + exercises, 0)} Exercises
      </h3>

      {course[1].parts.map(({name, exercises, id}) => 
        <Part
            name={name}
            exercises={exercises}
            key={id}
        />
      )}

      <h3>
        Total of {course[1].parts.reduce((sum, {exercises}) => sum + exercises, 0)} Exercises
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