import { useState } from 'react'

const Header = props => <header><h1>{props.title}</h1></header>

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Votes = props => <p>{props.text}{props.value}</p>

const Percentages = props => <p>{props.text}{props.value} %</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = (good + neutral + bad)

  const title1 = "give feedback"
  const title2 = "statistics"

  const handleGoodClicks = () => {
    setGood(good + 1)
  }

  const handleNeutralClicks = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClicks = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header title={title1} /> 

      <Button handleClick={handleGoodClicks} text={"good"} />
      <Button handleClick={handleNeutralClicks} text={"neutral"} />
      <Button handleClick={handleBadClicks} text={"bad"} />

      <Header title={title2} />

      <Votes text={"good "} value={good} />
      <Votes text={"neutral "} value={neutral} />
      <Votes text={"bad "} value={bad} />

      <Votes text={"average "} value={total / 3} />
      <Percentages text={"positive "} value={(good / total) * 100} />

    </div>
  )
}

export default App