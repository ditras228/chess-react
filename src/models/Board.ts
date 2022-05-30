import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Queen } from "./figures/Queen";
import { Pawn } from "./figures/Pawn";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Rook } from "./figures/Rook";
import { Knight } from "./figures/Knight";

export class Board {
  cells: Cell[][] = [];

  public initCells(): void {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); //Черные
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); //Белые
        }
      }
      this.cells.push(row);
    }
  }
  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    return newBoard;
  }
  public highLightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < 8; j++) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target);
      }
    }
  }
  public getCell(x: number, y: number): Cell {
    return this.cells[y][x];
  }

  public addPawns(): void {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      new Pawn(Colors.WHITE, this.getCell(i, 6));
    }
  }

  public addKnight(): void {
    new Knight(Colors.BLACK, this.getCell(1, 0));
    new Knight(Colors.BLACK, this.getCell(6, 0));
    new Knight(Colors.WHITE, this.getCell(1, 7));
    new Knight(Colors.WHITE, this.getCell(6, 7));
  }

  public addKings(): void {
    new King(Colors.BLACK, this.getCell(4, 0));
    new King(Colors.WHITE, this.getCell(4, 7));
  }

  public addBishops(): void {
    new Bishop(Colors.BLACK, this.getCell(2, 0));
    new Bishop(Colors.BLACK, this.getCell(5, 0));
    new Bishop(Colors.WHITE, this.getCell(2, 7));
    new Bishop(Colors.WHITE, this.getCell(5, 7));
  }

  public addQueen(): void {
    new Queen(Colors.BLACK, this.getCell(3, 0));
    new Queen(Colors.WHITE, this.getCell(3, 7));
  }

  public addRooks(): void {
    new Rook(Colors.BLACK, this.getCell(0, 0));
    new Rook(Colors.BLACK, this.getCell(7, 0));
    new Rook(Colors.WHITE, this.getCell(0, 7));
    new Rook(Colors.WHITE, this.getCell(7, 7));
  }

  public addFigures(): void {
    this.addPawns();
    this.addKnight();
    this.addKings();
    this.addBishops();
    this.addQueen();
    this.addRooks();
  }
}
