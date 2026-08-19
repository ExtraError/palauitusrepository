import { useState } from 'react'

// This is header

const Header = ({courseHeader}) => {
  return (
    <div>
      <h1>
        {courseHeader}
      </h1>
    </div>
  )
}

// This is for subHeader

const Header1 = ({subHeader}) => {
  return (
    <div>
      <h1>
        {subHeader}
      </h1>
    </div>
  )
}


// This is button for good

const Good = (props) => {

  return (
      <button onClick={() => props.setGood(props.good + 1)}>
        good
      </button>
  )
}


// This is button for neutral

const Neutral = (props) => {

  return (
      <button onClick={() => props.setNeutral(props.neutral + 1)}>
        neutral
      </button>
  )
}


// This is button for bad

const Bad = (props) => {

  return (
      <button onClick={() => props.setBad(props.bad + 1)}>
        bad
      </button>
  )
}

// Statistics

const Statistics = (props) => {

  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        No Feedback
      </div>
    )
  } else {

  return (
    <div>
      <p>
        Good: {props.good}
      </p>
      
      <p>
        Neutral: {props.neutral}
      </p>
      
      <p>
        Bad: {props.bad}
      </p>
      
      <h3>
        Total: {props.good + props.neutral + props.bad}
      </h3>

      <p>
        Average: {(props.good - props.bad) / (props.good + props.neutral + props.bad) || 0}
      </p>

      <p>
        Positive: {((props.good / (props.good + props.neutral + props.bad)) * 100) || 0} %
      </p>
    </div>
  )
  }
}




const App = () => {

  const courseHeader = 'Give Feedback'
  const subHeader = 'Statistics'

  // tallenna napit omaan tilaansa
  // Minimize the buttons to their own area.
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>

      <Header courseHeader={courseHeader}/>

      <Good good={good} setGood={setGood}/>
      <Neutral neutral={neutral} setNeutral={setNeutral}/>
      <Bad bad={bad} setBad={setBad}/>

      <Header1 subHeader={subHeader}/>

      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad}

      />

    </div>
  )
}

export default App