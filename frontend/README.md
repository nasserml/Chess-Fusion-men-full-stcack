# ♟️ Chess Fusion - Frontend  

Welcome to the **Chess Fusion** frontend repository! This project delivers a sleek and interactive user interface for online chess gameplay, blending cutting-edge technology with an intuitive user experience.  

## 🌟 Project Overview  

The frontend of Chess Fusion is a robust and dynamic web application designed to provide:  
- **Real-Time Gameplay**: Communicates with the backend via WebSockets for live updates.  
- **Dynamic Chessboard Rendering**: Powered by `chess.js` for accurate game logic and state management.  
- **Responsive Design**: Styled with **Tailwind CSS**, ensuring a seamless experience across all devices.  
- **Component-Based Architecture**: Modular and reusable React components, such as `ChessBoard` and `Button`.  

---  

## 🛠️ Technology Stack  

| **Tech**               | **Purpose**                                   |  
|------------------------|-----------------------------------------------|  
| **React**              | For building the user interface.             |  
| **TypeScript**         | Adds type safety to JavaScript.               |  
| **Vite**               | Enables fast builds and a modern dev server.  |  
| **Tailwind CSS**       | Utility-first CSS framework for styling.      |  
| **React Router**       | Handles navigation between screens.           |  
| **chess.js**           | Manages chess rules and move validation.      |  
| **WebSockets**         | Real-time communication with the backend.     |  
| **ESLint & Prettier**  | Ensures code quality and formatting.          |  

---  

## 📁 Project Structure  

```plaintext  
frontend/  
├── eslint.config.js         # ESLint configuration  
├── index.html               # Main HTML entry point  
├── package.json             # Project metadata and dependencies  
├── postcss.config.js        # PostCSS configuration  
├── README.md                # This file  
├── src/                     # Source code directory  
│   ├── App.css              # Global styles for the App component  
│   ├── App.tsx              # Main application component  
│   ├── components/          # Reusable UI components  
│   │   ├── Button.tsx       # Custom button component  
│   │   └── ChessBoard.tsx   # Interactive chessboard component  
│   ├── hooks/               # Custom hooks  
│   │   └── useSocket.ts     # WebSocket logic abstraction  
│   ├── main.tsx             # Entry point for React  
│   └── screens/             # High-level screen components  
│       ├── Game.tsx         # Chess game screen  
│       └── Landing.tsx      # Landing page  
├── tailwind.config.js       # Tailwind CSS configuration  
├── tsconfig.json            # Main TypeScript configuration  
├── tsconfig.app.json        # TypeScript app-specific config  
├── tsconfig.node.json       # TypeScript Node-specific config  
└── vite.config.ts           # Vite configuration  
```  

---  

## 🚀 Getting Started  

### Prerequisites  
- **Node.js** (version 18 or higher recommended)  
- **npm** or **yarn**  

### Installation  

1. **Clone the repository**:  
   ```bash  
   git clone https://github.com/nasserml/Chess-Fusion-men-full-stcack.git  
   cd Chess-Fusion-men-full-stcack/frontend  
   ```  

2. **Install dependencies**:  
   ```bash  
   npm install  
   # or  
   yarn install  
   ```  

### Development  

1. **Start the development server**:  
   ```bash  
   npm run dev  
   # or  
   yarn dev  
   ```  
   The application will be available at **`http://localhost:5173`**, with live reloading enabled.  

2. **Build for production**:  
   ```bash  
   npm run build  
   # or  
   yarn build  
   ```  
   The production-ready code will be generated in the `dist/` folder.  

3. **Preview the production build**:  
   ```bash  
   npm run preview  
   # or  
   yarn preview  
   ```  

### Linting  
Run ESLint to maintain code quality:  
```bash  
npm run lint  
# or  
yarn lint  
```  

---  

## Configuration  

- **Tailwind CSS**: Configuration is in `tailwind.config.js`.  
- **ESLint**: Configuration is in `eslint.config.js`.  
- **TypeScript**: Configuration is split between `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`.  

---  

## Code Explanation  

### `src/App.tsx`  

The main component of the application:  
- Sets up routing using `react-router-dom`.  
- Defines the `Landing` and `Game` screens.  

### `src/components/Button.tsx`  

A reusable button component with custom styling via Tailwind CSS.  

### `src/components/ChessBoard.tsx`  

Responsible for rendering the chessboard:  
- **State Management**: Handles `from` (selected piece to move).  
- **Rendering**: Displays the chessboard using the `chess.board()` array.  
- **Interactivity**: Manages piece selection and move messages via WebSocket.  
- **Visuals**: Uses images for chess pieces with styled board squares.  

### `src/hooks/useSocket.ts`  

Manages WebSocket connections:  
- Establishes a connection to `ws://localhost:8080`.  
- Handles lifecycle events (open, close) and cleanup.  

### `src/screens/Game.tsx`  

The game screen:  
- Initializes the chess game with `chess.js`.  
- Manages game state updates from WebSocket messages (`INIT_GAME`, `MOVE`, `GAME_OVER`).  
- Renders the chessboard and a "Play" button.  

### `src/screens/Landing.tsx`  

The landing page:  
- Uses `useNavigate` for screen navigation.  
- Displays a welcome message and a button to start playing online.  

---  

## Expanding the Application  

- **Backend Integration**: Connect to a backend for game logic, matchmaking, and user accounts.  
- **User Authentication**: Add login and registration features.  
- **Game Modes**: Support timed games and chess variants.  
- **UI Enhancements**: Include move history, captured pieces, timers, and chat.  
- **Error Handling**: Enhance error management for WebSocket connections and invalid moves.  
- **Testing**: Add comprehensive tests to ensure functionality and prevent regressions.  

---  

## Notes  

- WebSocket server runs at `ws://localhost:8080`. Update if necessary.  
- Moves are validated client-side with `chess.js`, but server-side validation is essential to prevent cheating.  
- Implement reconnection handling for interrupted games.  
- Game-over conditions are not yet fully implemented.  

---  


