import { Chess, Color, PieceSymbol, Square } from "chess.js";
import React, { useState } from "react";
import { MOVE } from "../screens/Game";

type Props = {
  chess: Chess;
  setBoard: React.Dispatch<
    React.SetStateAction<
      ({
        square: Square;
        type: PieceSymbol;
        color: Color;
      } | null)[][]
    >
  >;
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  socket: WebSocket;
};

const ChessBoard = ({ board, socket, setBoard, chess }: Props) => {
  const [from, setFrom] = useState<Square | null>(null);
  return (
    <div className="w-full">
      {board.map((row, i) => (
        <div key={i} className="flex justify-center items-center">
          {row.map((square, j) => {
            const squareRepresentation = (String.fromCharCode(97 + (j % 8)) +
              "" +
              (8 - i)) as Square;

            return (
              <div
                onClick={() => {
                  console.log("color square", square?.color);
                  if (!from) {
                    setFrom(squareRepresentation);
                  } else {
                    socket.send(
                      JSON.stringify({
                        type: MOVE,
                        payload: {
                          move: {
                            from,
                            to: squareRepresentation,
                          },
                        },
                      })
                    );

                    setFrom(null);

                    chess.move({
                      from,
                      to: squareRepresentation,
                    });

                    setBoard(chess.board());
                  }
                }}
                key={j}
                className={`w-16 h-16 flex items-center justify-center  font-extrabold ${
                  (i + j) % 2 === 0 ? "bg-[#EBECD0]" : "bg-[#779556]"
                } ${square?.color == "w" ? "text-red-800" : "text-blue-800"}`}
              >
                {square?.color && (
                  <img
                  className="w-12"
                    src={`/chess-pieces/${
                      square.color == "w"
                        ? square.type.toUpperCase()
                        : square.type + "-black"
                    }.png`}
                  />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
