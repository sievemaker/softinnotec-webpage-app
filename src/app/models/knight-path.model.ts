import {KnightMove} from "./knight-move.model";

export class KnightPath {
  private path: Array<[number, number]> = []

  addMove(move: KnightMove) {

  }

  isEmpty() {
    return this.path.length === 0;
  }

  moveLU() {
    return false;
  }

  lastMove(): KnightMove {
    return {x: 1, y: 1, forward: true};
  }

  moveLMU() {
    return false;
  }

  moveLMD() {
    return false;
  }

  moveLD() {
    return false;
  }

  moveRU() {
    return false;
  }

  moveRMU() {
    return false;
  }

  moveRMD() {
    return false;
  }

  moveRD() {
    return false;
  }
}
