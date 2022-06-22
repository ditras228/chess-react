import { Figure, FigureName } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureName.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    // Vertical
    if (
      (target.y === this.cell.y + 1 || target.y === this.cell.y - 1) &&
      target.x === this.cell.x
    ) {
      return true;
    }

    // Horizontal
    if (
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      target.y === this.cell.y
    ) {
      return true;
    }

    // Diagonal
    if (
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      (target.y === this.cell.y + 1 || target.y === this.cell.y - 1)
    ) {
      return true;
    }
    return false;
  }
}
