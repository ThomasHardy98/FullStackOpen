import { useState } from 'react'

const Header = props => <h1>{props.title}</h1>

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const StatisticLine = ({text, value}) => {
  if (text === 'positive') {
    return (
        <tr><td>{text} {value} %</td></tr>
    )
  }
  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = (props) => {
  if (props.totalValue === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
      <table>
        <tbody>
            <StatisticLine text={'good'} value={props.goodValue} />
            <StatisticLine text={'neutral'} value={props.neutralValue} />
            <StatisticLine text={'bad'} value={props.badValue} />
            <StatisticLine text={'all'} value={props.totalValue} />
            <StatisticLine text={'average'} value={(props.totalValue / 3).toFixed(1)} />
            <StatisticLine text={'positive'} value={((props.goodValue / props.totalValue) * 100).toFixed(1)} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = (good + neutral + bad)

  const title1 = 'give feedback'
  const title2 = 'statistics'

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
      <Button handleClick={handleGoodClicks} text={'good'} />
      <Button handleClick={handleNeutralClicks} text={'neutral'} />
      <Button handleClick={handleBadClicks} text={'bad'} />
      <Header title={title2} />
      <Statistics goodValue={good} neutralValue={neutral} badValue={bad} totalValue={total} />
    </div>
  )
}

export default App