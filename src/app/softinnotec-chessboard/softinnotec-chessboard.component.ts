import {Component, input, viewChildren, OnInit, AfterViewInit, inject, ChangeDetectorRef} from '@angular/core';
import {SoftinnotecSquareComponent} from "../softinnotec-square/softinnotec-square.component";

@Component({
    selector: 'app-softinnotec-chessboard',
  imports: [
    SoftinnotecSquareComponent
  ],
    standalone: true,
    templateUrl: './softinnotec-chessboard.component.html',
    styleUrl: './softinnotec-chessboard.component.sass'
})
export class SoftinnotecChessboardComponent implements AfterViewInit, OnInit {

  fileLength = input(8);
  rankLength = input(8);
  value = input<number>(1);
  squares = viewChildren(SoftinnotecSquareComponent);
  private squaresArray: SoftinnotecSquareComponent[] = [];
  private visitedSquares: SoftinnotecSquareComponent[] = [];

  private _arrays: { [key: string]: number[] } = {
    0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 50, 51, 52, 53, 54, 55, 56],
    1: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56],
    2: [1, 2, 3, 4, 5, 6, 7, 8, 16, 25, 26, 27, 28, 29, 30, 31, 32, 41, 49, 50, 51, 52, 53, 54, 55, 56],
    3: [1, 2, 3, 4, 5, 6, 7, 8, 16, 25, 26, 27, 28, 29, 30, 31, 32, 40, 49, 50, 51, 52, 53, 54, 55, 56],
    4: [9, 16, 17, 24, 25, 26, 27, 28, 29, 30, 31, 32, 40, 48, 56],
    5: [1, 2, 3, 4, 5, 6, 7, 8, 9, 25, 26, 27, 28, 29, 30, 31, 32, 40, 49, 50, 51, 52, 53, 54, 55, 56],
    6: [1, 2, 3, 4, 5, 6, 7, 8, 9, 17, 25, 26, 27, 28, 29, 30, 31, 32, 33, 40, 41, 48, 49, 50, 51, 52, 53, 54, 55, 56],
    7: [1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56],
    8: [1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 40, 41, 48, 49, 50, 51, 52, 53, 54, 55, 56],
    9: [1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 24, 25, 26, 27, 28, 29, 30, 31, 32, 40, 48, 49, 50, 51, 52, 53, 54, 55, 56]
  };

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.squaresArray = Array.from(this.squares());
    this.startGame();
  }

  async startGame() {
    for (let i = 0; i <= 10000; i++) {
      this.makeNextMove();
      await this.delay(500);
    }
  }

  private async makeNextMove() {
    const randomNumber = Math.floor(Math.random() * 64) + 1;
    const square = this.squaresArray.find(s => s.squareLabel === randomNumber);
    const forward: boolean = this.visitedSquares.length <= 10;

    if (square) {
      switch (forward) {
        case true:
          square.squareClass.set('notempty proposed');
          this.visitedSquares.push(square);
          break;
        case false:
          let squareToRollback = this.visitedSquares.pop();
          if (squareToRollback) {
            squareToRollback.squareClass.set('empty');
          }
          break;
      }
    } else {
      console.error('Square not found');
    }
  }

  private async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
