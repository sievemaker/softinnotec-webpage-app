import {Component, input, viewChildren, OnInit, AfterViewInit, inject, ChangeDetectorRef} from '@angular/core';
import {SoftinnotecSquareComponent} from "../softinnotec-square/softinnotec-square.component";
import {SoftinnotecKnightsTourService} from "../softinnotec-knights-tour.service";
import {KnightMove} from "../models/knight-move.model";

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
  squares = viewChildren(SoftinnotecSquareComponent);
  knightTourService = inject(SoftinnotecKnightsTourService);

  ngOnInit(): void {
    this.knightTourService.setFileLength(this.fileLength());
    this.knightTourService.setRankLength(this.rankLength());
  }

  ngAfterViewInit(): void {
    this.startGame();
  }

  async startGame() {
    while (!this.knightTourService.isGameFinished()) {
      await this.makeNextMove();
      await this.delay(1000);
    }
  }

  private async makeNextMove() {
    let nextMove: KnightMove = this.knightTourService.findNextMove();
    const square = this.squares().find(s => s.x() === nextMove.x && s.y() === nextMove.y)
    if (square) {
      switch (nextMove.forward) {
        case true:
          square.squareClass.set('notempty proposed');
          break;
        case false:
          square.squareClass.set('empty');
          break;
      }
    } else {
      console.error('Square not found for coordinates:', nextMove.x, nextMove.y);
    }
  }

  private async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
