# ♟ Chess Fusion: Real-Time Online Chess

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nasserml/Chess-Fusion-men-full-stcack/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/nasserml/Chess-Fusion-men-full-stcack.svg)](https://github.com/nasserml/Chess-Fusion-men-full-stcack/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/nasserml/Chess-Fusion-men-full-stcack.svg)](https://github.com/nasserml/Chess-Fusion-men-full-stcack/network/members)
[![GitHub issues](https://img.shields.io/github/issues/nasserml/Chess-Fusion-men-full-stcack.svg)](https://github.com/nasserml/Chess-Fusion-men-full-stcack/issues)

**Chess Fusion** is a modern, full-stack web application designed to bring the classic game of chess into the digital age with real-time, online multiplayer functionality. Built with the latest technologies, it delivers a seamless and engaging chess-playing experience for players worldwide.

---

## 🌟 Project Overview

Chess Fusion leverages a robust client-server architecture to offer real-time chess gameplay:

- **Frontend:** Built with React, TypeScript, and Tailwind CSS, the responsive UI provides an intuitive chessboard for players of all skill levels.
- **Backend:** A scalable Node.js server utilizing WebSockets for instant communication and `chess.js` for enforcing chess rules and managing game logic.

---

## ✨ Key Features

- **Real-Time Multiplayer:** Connect and play against opponents globally with live move synchronization.
- **Responsive Design:** Optimized for desktops, tablets, and smartphones.
- **User-Friendly Interface:** Clean and modern design ensures an intuitive experience.
- **Accurate Chess Logic:** Powered by `chess.js` to validate moves and manage game states.
- **WebSockets for Instant Updates:** Ensures smooth gameplay with real-time communication.
- **TypeScript for Reliability:** Enhanced code quality and maintainability.
- **Quick Setup:** Straightforward installation and configuration for both developers and users.

---

## 🛠 Technology Stack

| Technology       | Purpose                                      |
|------------------|----------------------------------------------|
| **React**        | Building the user interface                 |
| **TypeScript**   | Type safety and improved code quality       |
| **Vite**         | Fast builds and modern development server   |
| **Tailwind CSS** | Utility-first CSS framework for styling     |
| **React Router** | Navigation between application pages        |
| **chess.js**     | Chess rules and move validation             |
| **Node.js**      | Backend server                              |
| **WebSockets**   | Real-time client-server communication       |
| **ESLint**       | Code linting and quality assurance          |

---

## 🗂 Project Structure

```plaintext
Chess-Fusion-men-full-stcack/
├── backend1/                   # Backend server code
│   ├── dist/                   # Compiled TypeScript files
│   ├── src/                    # TypeScript source files
│   │   ├── Game.ts             # Game logic
│   │   ├── GameManager.ts      # Game management logic
│   │   ├── index.ts            # Server entry point
│   │   └── messages.ts         # WebSocket message types
│   ├── package.json            # Backend dependencies
│   ├── tsconfig.json           # TypeScript configuration
├── frontend/                   # Frontend client code
│   ├── src/                    # React source files
│   │   ├── components/         # Reusable UI components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── screens/            # Application screens
│   │   ├── App.tsx             # Main application component
│   │   ├── main.tsx            # React entry point
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   ├── tsconfig.json           # TypeScript configuration
│   ├── vite.config.ts          # Vite configuration
├── README.md                   # Project documentation
└── LICENSE                     # License file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** (or **yarn**)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nasserml/Chess-Fusion-men-full-stcack.git
   cd Chess-Fusion-men-full-stcack
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend1
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server:**
   ```bash
   cd ../backend1
   npm run build
   node dist/index.js
   ```

2. **Start the frontend development server:**
   ```bash
   cd ../frontend
   npm run dev
   ```

   The frontend will be accessible at `http://localhost:5173`.

---

## 🎮 How to Play

1. Open your browser and navigate to `http://localhost:5173`.
2. Click the **"Play Online"** button to find a match.
3. You'll be paired with another player and assigned a color (white or black).
4. To make a move:
   - Click the piece you want to move (highlighted in the UI).
   - Click the target square.
5. Your moves will be validated and displayed in real-time for your opponent.
6. Enjoy the game and strategize to win!

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

Please review the [CONTRIBUTING.md](CONTRIBUTING.md) file for detailed guidelines.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## 🙏 Acknowledgments

- Inspired by [this tutorial series](https://www.youtube.com/watch?v=vSJsz7tNuyU&list=PLVKLWop9wWA8rdaNPIsG6r4a6QZClCH-M&index=4&t=8s).
- Chess logic powered by `chess.js`.
- Styling by Tailwind CSS.

---

## 🔬 Future Enhancements

- **User Authentication:** Add user profiles and login functionality.
- **Game History:** Allow players to save and review past games.
- **ELO Ratings:** Implement a ranking system.
- **Timed Matches:** Introduce chess clocks and timed gameplay.
- **Spectator Mode:** Enable non-players to watch live matches.
- **In-Game Chat:** Add a communication feature for players.
- **Improved Reconnection:** Handle disconnections more gracefully.

---

**Enjoy playing Chess Fusion and elevate your chess skills!**

