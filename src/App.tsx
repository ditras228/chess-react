import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);
  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }
  return (
    <div className="App">
      <BoardComponent board={board} setBoard={setBoard}></BoardComponent>
    </div>
  );
}

export default App;
