# 📚 Flashcard Flipper

A simple, beautiful React application for studying with interactive flashcards. Click a card to flip it and reveal the answer!

## ✨ Features

- **Interactive Flashcards**: Click any card to flip between question and answer
- **Smooth Animations**: Beautiful 3D flip animation using CSS transforms
- **Navigation**: Navigate between cards with Previous/Next buttons
- **Persistent Storage**: Cards are saved to localStorage and persist across page refreshes
- **Progress Tracking**: See which card you're on (e.g., "Card 3 of 10")
- **Responsive Design**: Works beautifully on desktop and mobile devices

## 🎯 Learning Objectives

This project demonstrates:

- **React Props**: Passing data from parent to child components
- **useState Hook**: Managing component state (flipped/unflipped)
- **Conditional Rendering**: Displaying different content based on state
- **Reusable Components**: Building flexible, reusable UI components
- **localStorage**: Persisting data in the browser
- **Event Handling**: Responding to user clicks and interactions

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
flashcard-flipper/
├── src/
│   ├── components/
│   │   ├── Flashcard.jsx          # Individual flashcard component
│   │   ├── Flashcard.css          # Flashcard styling
│   │   ├── FlashcardList.jsx      # Container for flashcards with navigation
│   │   └── FlashcardList.css      # Navigation styling
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # App styling
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles
├── index.html                     # HTML template
├── package.json                   # Dependencies
└── vite.config.js                # Vite configuration
```

## 🎨 How It Works

### Flashcard Component

The `Flashcard` component:
- Accepts `question` and `answer` as props
- Uses `useState(false)` to track if the card is flipped
- Conditionally renders question or answer based on `isFlipped`
- Toggles state when clicked

### FlashcardList Component

The `FlashcardList` component:
- Manages the array of flashcards
- Tracks the current card index with `useState`
- Passes current card data to `Flashcard` via props
- Handles navigation with `nextCard()` and `previousCard()` functions
- Loops correctly (last → first, first → last)

### Data Storage

Cards are stored in localStorage:
- Automatically saved when the app loads
- Persists across page refreshes
- Default cards are provided if localStorage is empty

## 🎓 Customization

### Adding More Cards

Edit the `defaultFlashcards` array in `src/App.jsx`:

```jsx
const defaultFlashcards = [
  { id: 1, question: "Your question?", answer: "Your answer!" },
  // Add more cards here...
]
```

Cards are automatically saved to localStorage when you interact with the app.

### Styling

All styles are in the respective CSS files:
- `src/index.css` - Global styles
- `src/App.css` - App header styles
- `src/components/Flashcard.css` - Card flip animation and styling
- `src/components/FlashcardList.css` - Navigation button styles

## 🚀 Future Enhancements

Potential features to add:
- Add/Edit/Delete cards functionality
- Card categories or decks
- Randomize card order
- Track correct/incorrect answers
- Progress bar or statistics
- Keyboard navigation (arrow keys)

## 📝 License

This project is open source and available for educational purposes.

---

Happy studying! 🎉
