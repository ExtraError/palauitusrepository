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

const Good = ({good, setGood}) => {

  return (
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
  )
}

const GoodStatistics = ({good}) => {
  return (
    <div>
      <p>
        Good: {good}
      </p>
    </div>
  )
}

// This is button for neutral

const Neutral = ({neutral, setNeutral}) => {

  return (
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
  )
}

const NeutralStatistics = ({neutral}) => {
  return (
    <div>
      <p>
        Neutral: {neutral}
      </p>
    </div>
  )
}

// This is button for bad

const Bad = ({bad, setBad}) => {

  return (
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
  )
}

const BadStatistics = ({bad}) => {
  return (
    <div>
      <p>
        Bad: {bad}
      </p>
    </div>
  )
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

      <GoodStatistics good={good}/>
      <NeutralStatistics neutral={neutral}/>
      <BadStatistics bad={bad}/>

    </div>
  )
}

export default App