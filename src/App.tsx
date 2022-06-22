import React, { useEffect, useState } from "react";
import "./App.scss";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import { Player } from "./models/Player";
import { Colors } from "./models/Colors";
import LostFigures from "./components/LostFigures";

function App() {
  document.title = "Chess on React";

  const [board, setBoard] = useState(new Board());
  const [whitePLayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPLayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
  }, []);

  function restart(): void {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    swapPlayer();
  }

  function swapPlayer(): void {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPLayer : whitePLayer
    );
  }

  return (
    <div className="app">
      <div className="app__container">
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        ></BoardComponent>
        <LostFigures
          title={"Черные фигуры"}
          figures={board.lostBlackFigures}
        ></LostFigures>
        <LostFigures
          title={"Белые фигуры"}
          figures={board.lostWhiteFigures}
        ></LostFigures>
      </div>
    </div>
  );
}

export default App;
