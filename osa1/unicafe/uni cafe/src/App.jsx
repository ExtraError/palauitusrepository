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

// Generic button

const Button = (props) => {
  return (
    <button 
      onClick={props.onClick}>
      {props.text}
    </button>
  )
}

// This is button for good

const Good = (props) => {

  return (
      <Button 
      text='Good'
        onClick={() => props.setGood(props.good + 1)}
      />
  )
}


// This is button for neutral

const Neutral = (props) => {

  return (
     <Button 
      text='Neutral'
      onClick={() => props.setNeutral(props.neutral + 1)}
    />
  )
}


// This is button for bad

const Bad = (props) => {

  return (
      <Button 
      text='Bad'
        onClick={() => props.setBad(props.bad + 1)}
      />
  )
}

// Generic statistic line

const StatisticalLine = (props) => {
  return (
    <div>
      <p>
        {props.text}: {props.value}
      </p>
    </div>
  )
}

// Statistics

const Statistics = (props) => {

  console.log(props)
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        No Feedback Given
      </div>
    )
  }

  return (
    <div>
      <StatisticalLine
        text='Good' value={props.good}
      />

      <StatisticalLine
        text='Neutral' value={props.neutral}
      />
      
     <StatisticalLine
        text='Bad' value={props.bad}
      />

      <StatisticalLine
        text='Total' value={props.good + props.neutral + props.bad}
      />

      <StatisticalLine
        text='Average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad) || 0}
      />

      <StatisticalLine
        text='Positive' value={`${((props.good / (props.good + props.neutral + props.bad)) * 100) || 0} %`}
      />
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

      <Statistics
        good={good}
        neutral={neutral} 
        bad={bad}
      />

    </div>
  )
}

export default App