import { useState, useEffect } from 'react'
import FlashcardList from './components/FlashcardList'
import './App.css'

// Default flashcards data - Funny Jokes & Puzzles Edition! 😄🧩
const defaultFlashcards = [
  { id: 1, question: "What do you call a fake noodle?", answer: "An impasta! 🍝" },
  { id: 2, question: "Why did the scarecrow win an award?", answer: "He was outstanding in his field! 🌾" },
  { id: 3, question: "What do you call a bear with no teeth?", answer: "A gummy bear! 🐻" },
  { id: 4, question: "Why don't eggs tell jokes?", answer: "They'd crack each other up! 🥚" },
  { id: 5, question: "What's the best thing about Switzerland?", answer: "I don't know, but the flag is a big plus! 🇨🇭" },
  { id: 6, question: "Why did the math book look so sad?", answer: "Because it had too many problems! 📚" },
  { id: 7, question: "What do you call a sleeping bull?", answer: "A bulldozer! 🐂" },
  { id: 8, question: "Why did the coffee file a police report?", answer: "It got mugged! ☕" },
  { id: 9, question: "What do you call a nosy pepper?", answer: "Jalapeño business! 🌶️" },
  { id: 10, question: "Why did the bicycle fall over?", answer: "Because it was two tired! 🚲" },
  { id: 11, question: "What do you call a fish wearing a bowtie?", answer: "Sofishticated! 🐟" },
  { id: 12, question: "I speak without a mouth and hear without ears. What am I?", answer: "An echo! 🔊" },
  { id: 13, question: "What has keys but no locks, space but no room?", answer: "A keyboard! ⌨️" },
  { id: 14, question: "Why did the cookie go to the doctor?", answer: "Because it felt crummy! 🍪" },
  { id: 15, question: "What gets wetter the more it dries?", answer: "A towel! 🧺" },
  { id: 16, question: "Why don't scientists trust atoms?", answer: "Because they make up everything! ⚛️" },
  { id: 17, question: "What has a head, a tail, but no body?", answer: "A coin! 🪙" },
  { id: 18, question: "Why did the tomato turn red?", answer: "Because it saw the salad dressing! 🍅" },
  { id: 19, question: "I'm tall when I'm young, short when I'm old. What am I?", answer: "A candle! 🕯️" },
  { id: 20, question: "What do you call a bear in the rain?", answer: "A drizzly bear! 🐻☔" }
]

function App() {
  const [flashcards, setFlashcards] = useState(() => {
    // Load from localStorage on initial render
    const saved = localStorage.getItem('flashcards')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        // Check if old technical questions exist (like "What is React?")
        const hasOldQuestions = parsed.some(card => 
          card.question && (
            card.question.toLowerCase().includes('react') ||
            card.question.toLowerCase().includes('jsx') ||
            card.question.toLowerCase().includes('usestate') ||
            card.question.toLowerCase().includes('props') ||
            card.question.toLowerCase().includes('conditional rendering')
          )
        )
        // If old questions found, use new defaults instead
        if (hasOldQuestions) {
          localStorage.setItem('flashcards', JSON.stringify(defaultFlashcards))
          return defaultFlashcards
        }
        return parsed
      } catch (e) {
        return defaultFlashcards
      }
    }
    return defaultFlashcards
  })

  // Save to localStorage whenever flashcards change
  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards))
  }, [flashcards])

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎭 Flashcard Flipper</h1>
        <p>Click a card to flip and laugh! 😂</p>
      </header>
      <FlashcardList flashcards={flashcards} />
    </div>
  )
}

export default App

