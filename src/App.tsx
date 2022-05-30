import React, { useEffect, useState } from "react";
import "./App.scss";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import { Player } from "./models/Player";
import { Colors } from "./models/Colors";

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePLayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPLayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  useEffect(() => {
    restart();
  }, []);
  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    swapPlayer();
  }
  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPLayer : whitePLayer
    );
  }
  return (
    <div className="App">
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      ></BoardComponent>
    </div>
  );
}

export default App;
