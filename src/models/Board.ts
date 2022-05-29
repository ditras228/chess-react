import {Cell} from "./Cell";
import {Colors} from "./Colors";
import {Queen} from "./figures/Queen";
import {King} from "./figures/King";
import {Pawn} from "./figures/Pawn";
import {Bishop} from "./figures/Bishop";

export class Board{
    cells: Cell[][] =[]

    public initCells(){
        for(let i=0;i<8;i++){
            const row: Cell[] = []
            for(let j = 0; j<8;j++){
                if((i+j)%2!==0){
                    row.push(new Cell(this, j, i, Colors.BLACK,  null)) //Черные
                }else{
                    row.push(new Cell(this, j, i, Colors.WHITE,  null)) //Белые
                }
            }
            this.cells.push(row)
        }
    }

    public getCell(x:number, y:number){
        return this.cells[y][x]
    }
    public addFigures(){

        new Queen(Colors.WHITE, this.getCell(3,3 ))
        new Pawn(Colors.WHITE, this.getCell(3,4 ))
        new Bishop(Colors.WHITE, this.getCell(4,5 ))
    }
}