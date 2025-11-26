import { useState } from 'react'
import './Flashcard.css'

function Flashcard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div 
      className={`flashcard ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <div className="flashcard-content">
            <h2>🤔 Question</h2>
            <p>{question}</p>
            <span className="hint">👆 Click to reveal the answer!</span>
          </div>
        </div>
        <div className="flashcard-back">
          <div className="flashcard-content">
            <h2>💡 Answer</h2>
            <p>{answer}</p>
            <span className="hint">😄 Click again to see the question!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flashcard

