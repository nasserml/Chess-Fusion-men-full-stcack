# ♟️ Real-Time Chess Backend  

This repository hosts the backend for a real-time, two-player chess game. Built for scalability and flexibility, the backend leverages **WebSockets** for real-time communication and the **`chess.js`** library to enforce chess rules and logic. This project handles gameplay synchronization, move validation, and game state management seamlessly.  

---

## 🌟 Features  

- **Real-Time Gameplay**: Synchronizes game states between players using WebSocket connections.  
- **Game Management**: Efficiently handles player matchmaking and manages multiple concurrent games.  
- **Comprehensive Chess Logic**: Implements standard chess rules via the `chess.js` library.  
- **Move Validation**: Ensures all moves conform to official chess rules.  
- **Game Over Detection**: Automatically detects checkmate, stalemate, and other endgame scenarios.  
- **Message Handling**: Structured message types facilitate robust client-server communication.  

---

## 📂 File Structure  

```plaintext
backend1/  
├── src/  
│   ├── Game.ts         # Core logic for individual chess games.  
│   ├── GameManager.ts  # Manages multiple games and handles player matchmaking.  
│   ├── index.ts        # Main entry point for the application.  
│   └── messages.ts     # Definitions for client-server communication messages.  
├── package.json        # Project metadata, dependencies, and scripts.  
└── tsconfig.json       # TypeScript configuration.  
```  

---

## 🛠️ Code Overview  

### `src/Game.ts`  
The `Game` class encapsulates the logic for a single chess game, including move handling, validation, and state management.  

**Key Methods:**  
- **`constructor(player1: WebSocket, player2: WebSocket)`**: Initializes a game with two players, assigns colors, and sets up the chessboard.  
- **`makeMove(socket: WebSocket, move: { from: string; to: string })`**: Validates and processes player moves, updating the game state and notifying the opponent.  

### `src/GameManager.ts`  
The `GameManager` class oversees all active games, pairs players, and manages WebSocket connections.  

**Key Methods:**  
- **`addUser(socket: WebSocket)`**: Adds a user to the matchmaking queue or pairs them with another player.  
- **`removeUser(socket: WebSocket)`**: Handles player disconnections and updates active games accordingly.  
- **`addHandler(socket: WebSocket)`**: Processes incoming messages for game initialization and move execution.  

### `src/index.ts`  
The main entry point of the backend application. Sets up the WebSocket server and integrates it with the `GameManager`.  

**Highlights:**  
- Starts the server on **port 8080**.  
- Instantiates the `GameManager` to manage games and connections.  

### `src/messages.ts`  
Defines the structure for communication between clients and the server:  
- **`INIT_GAME`**: Starts a new game and assigns colors.  
- **`MOVE`**: Transmits moves between players.  
- **`GAME_OVER`**: Notifies players when the game concludes.  

---

## 📜 Configuration  

### `package.json`  
Lists project dependencies and scripts:  
```json
{
  "dependencies": {
    "@types/chess.js": "^0.13.7",
    "@types/ws": "^8.5.13",
    "chess.js": "^1.0.0-beta.8",
    "ws": "^8.18.0"
  }
}
```  

### `tsconfig.json`  
Configures TypeScript compilation:  
- **`target: "es2016"`**: Ensures compatibility with modern JavaScript.  
- **`strict: true"`**: Enforces strict type-checking.  
- **`esModuleInterop: true"`**: Facilitates interoperability between CommonJS and ES Modules.  

---

## 🚀 Getting Started  

### Prerequisites  
- **Node.js**: Version 16 or higher.  
- **npm**: Installed with Node.js.  

### Installation  
1. Clone the repository:  
   ```bash
   git clone https://github.com/nasserml/Chess-Fusion-men-full-stcack.git
   ```  
2. Navigate to the project directory:  
   ```bash
   cd backend1
   ```  
3. Install dependencies:  
   ```bash
   npm install
   ```  

### Build and Run  
1. Build the project:  
   ```bash
   tsc -b
   ```  
2. Start the server:  
   ```bash
   node dist/index.js
   ```  
3. The server will listen for WebSocket connections on **`ws://localhost:8080`**.  

---

## 🎮 How to Use  

### 1. Connect to the Server  
Establish a WebSocket connection to **`ws://localhost:8080`**.  

### 2. Initialize a Game  
Send an `INIT_GAME` message:  
```json
{ "type": "init_game" }
```  
Receive a response with your assigned color:  
```json
{ "type": "init_game", "payload": { "color": "white" } }
```  

### 3. Make a Move  
Send a move request:  
```json
{ "type": "move", "move": { "from": "e2", "to": "e4" } }
```  

### 4. Receive Opponent’s Move  
The server broadcasts opponent moves:  
```json
{ "type": "move", "payload": { "from": "a7", "to": "a6" } }
```  

### 5. Endgame Notification  
The server sends a `GAME_OVER` message:  
```json
{ "type": "game_over", "payload": { "winner": "black" } }
```  

---

## 🔧 Potential Improvements  

- **Error Handling**: Introduce robust validation for invalid moves and edge cases.  
- **Disconnection Management**: Handle player disconnections gracefully to preserve game states.  
- **Advanced Features**: Add support for timers, user authentication, and game history tracking.  
- **Performance Optimization**: Scale the architecture to handle high player volumes efficiently.  

---

Feel free to contribute to the project by submitting issues or pull requests!  

--- 