import { useEffect, useRef, useState } from 'react'
import './App.css'
// import bg from 'images'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null)

  const decrement = () => {
    let inputVal = Number(inputRef.current.value) || 1
    let newCount = count > 0 ? count - inputVal : 0
    setCount(newCount);
    localStorage.setItem('count', JSON.stringify(newCount))
  }

  const increement = () => {
    let inputVal = Number(inputRef.current.value) || 1
    let newCount = count + inputVal
    setCount(newCount);
    localStorage.setItem('count', JSON.stringify(newCount))
  }

  useEffect(() => {
    let oldCount = JSON.parse(localStorage.getItem('count')) || 0
    setCount(oldCount)
  }, [])

  return (
    <>
      <div className="counter-container">
        <input type="number" ref={inputRef} className="counter-input" />
        <div className="btn-section">
          <button type="button" onClick={decrement} className="counter-btn">
            -
          </button>

          <span className="counter-value">
            {count}
          </span>

          <button type="button" onClick={increement} className="counter-btn">
            +
          </button>
        </div>
      </div>
    </>
  )
}

export default App
