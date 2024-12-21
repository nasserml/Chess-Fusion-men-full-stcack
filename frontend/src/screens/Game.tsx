import React, { useEffect, useState } from "react";
import ChessBoard from "../components/ChessBoard";
import Button from "../components/Button";
import { useSocket } from "../hooks/useSocket";
import { Chess } from "chess.js";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

function Game() {
  const socket = useSocket();
  
  
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());
  const [start, setStart] = useState<boolean>(false)

  useEffect(() => {
    console.log(setChess)
    if (!socket) {
      return;
    }

    let move = null;
    socket.onmessage = (event) => {
      const message :{ type: string; payload: {
        from: string;
        to: string;
        promotion?: string;
      } } = JSON.parse(event.data) 
      console.log(message);
      switch (message.type) {
        case INIT_GAME:
          console.log("Game initialized");
          setStart(true);
          setBoard(chess.board());
          break;
        case MOVE:
           move = message.payload;
          chess.move(move);
          setBoard(chess.board());
          console.log("Move made");
          break;
        case GAME_OVER:
          console.log("Game over");
          break;
      }
    };
  }, [socket]);

  if (!socket) {
    return <div>Connecting</div>;
  }
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg">
        <div className="grid grid-cols-6 gap-4 items-start justify-center">
          <div className="col-span-4 bg-red-700/40">
            <ChessBoard chess={chess} setBoard={setBoard} board={board} socket={socket} />
          </div>
          <div className="col-span-2 w-full flex justify-center mt-10 ">
            {!start && <Button
              onCLick={() => {
                socket.send(
                  JSON.stringify({
                    type: INIT_GAME,
                  })
                );
              }}
            >
              Play
            </Button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
