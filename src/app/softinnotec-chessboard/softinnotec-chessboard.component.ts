import {
  Component,
  input,
  viewChildren,
  OnInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
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
export class SoftinnotecChessboardComponent implements AfterViewInit, OnInit, OnDestroy {

  fileLength = input(5);
  rankLength = input(5);
  value = input<number>(1);
  squares = viewChildren(SoftinnotecSquareComponent);
  private squaresArray: SoftinnotecSquareComponent[] = [];
  private visitedSquares: SoftinnotecSquareComponent[] = [];
  private gameRunning: boolean = true;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.squaresArray = Array.from(this.squares());
    this.startGame();
  }

  ngOnDestroy(): void {
    // Clean up resources and stop game when component is destroyed
    this.stopGame();
    this.squaresArray = [];
    this.visitedSquares = [];
  }

  async startGame() {
    if (!this.gameRunning) return;

    for (let i = 0; i <= 10000; i++) {
      this.makeNextMove();
      await this.delay(500);
    }
  }

  private async makeNextMove() {
    const randomNumber = Math.floor(Math.random() * 25) + 1;
    const square = this.squaresArray.find(s => s.squareLabel === randomNumber);
    const forward: boolean = this.visitedSquares.length <= 5;

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
      console.error('Square not found ' + randomNumber);
    }
  }

  private async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private stopGame(): void {
    this.gameRunning = false;
  }

}
