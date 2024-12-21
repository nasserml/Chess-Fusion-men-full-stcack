import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
        <div className="">
          <img src={"/chessboard.jpg"} className="w-full" />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-4xl font-bold">
              Play chess online on the Site!
            </h1>
          </div>

          <div>
            <Button
              onCLick={() => {
                navigate("/game");
              }}
            >
              Play Online
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
