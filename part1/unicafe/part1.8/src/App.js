import { useState } from 'react'

const Header = props => <header><h1>{props.title}</h1></header>

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Statistics = (props) => {
  return (
    <>
      <p>{props.goodText}{props.goodValue}</p>
      <p>{props.neutralText}{props.neutralValue}</p>
      <p>{props.badText}{props.badValue}</p>
      <p>{props.averageText}{(props.totalValue / 3)}</p>
      <p>{props.positiveText}{(props.goodValue / props.totalValue) * 100} %</p>
    </>
  )
}

const App = () => {
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

      <Statistics goodText={'good '} goodValue={good} neutralText={'neutral '} neutralValue={neutral} 
      badText={'bad '} badValue={bad} totalValue={total} averageText={'average '} positiveText={'positive '} />
    </div>
  )
}

export default App