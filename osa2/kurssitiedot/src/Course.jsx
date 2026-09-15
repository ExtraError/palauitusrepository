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


const Part = ({name, exercises}) => {
  return (
    <div>
        <p>
          {name} {exercises}
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

export default Course