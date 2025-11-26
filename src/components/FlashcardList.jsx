import { useState } from 'react'
import Flashcard from './Flashcard'
import './FlashcardList.css'

function FlashcardList({ flashcards }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex((index) => (index + 1) % flashcards.length)
  }

  const previousCard = () => {
    setCurrentIndex((index) => (index - 1 + flashcards.length) % flashcards.length)
  }

  if (flashcards.length === 0) {
    return (
      <div className="flashcard-list-empty">
        <p>🎴 No flashcards available. Time to add some funny cards! 😄</p>
      </div>
    )
  }

  const currentCard = flashcards[currentIndex]

  return (
    <div className="flashcard-list">
      <div className="flashcard-container">
        <Flashcard 
          question={currentCard.question} 
          answer={currentCard.answer} 
        />
      </div>
      
      <div className="navigation">
        <button 
          className="nav-button prev-button" 
          onClick={previousCard}
          aria-label="Previous card"
        >
          ← Previous
        </button>
        
        <div className="card-counter">
          🎴 Card {currentIndex + 1} of {flashcards.length}
        </div>
        
        <button 
          className="nav-button next-button" 
          onClick={nextCard}
          aria-label="Next card"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default FlashcardList

