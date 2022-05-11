import { useState } from 'react'

const Header = ({ text }) => (<h1> {text} </h1>)

const Anecdote = ({ text, votes}) => (
  <>
    <p>{text}</p>
    <p>has {votes} vote(s)</p>
  </>
)

const AnecdoteOfDay = ({ anecdotes, votes }) => {
  const highestVotes = Math.max(...votes)
  const winningAnecdote = votes.indexOf(highestVotes)
  const winner = anecdotes[winningAnecdote]

  if (highestVotes === 0) {
    return (
      <>
        <p>no votes yet</p>
      </>
    )
  }

  return (
    <>
      <p>{winner}</p>
      <p>has {highestVotes} vote(s)</p>
    </>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(7))

  const randomNumber = () => Math.floor(Math.random() * 7)
  const changeQuote = () => setSelected(randomNumber)

  const voteQuote = () => {
    const copy = [ ...votes ]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Header text={'Anecdote of the day'}></Header>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]}></Anecdote>
      <Button onClick={voteQuote} text={'vote'}></Button>
      <Button onClick={changeQuote} text={'next anecdote'}></Button>

      <Header text={'Anecdote with most votes'}></Header>
      <AnecdoteOfDay anecdotes={anecdotes} votes={votes}></AnecdoteOfDay>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
]

export default App