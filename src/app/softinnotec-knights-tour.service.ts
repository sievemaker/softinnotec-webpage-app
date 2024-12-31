import {inject, Injectable} from '@angular/core';
import {SoftinnotecConfigService} from "./softinnotec-config-service";
import {KnightPath} from "./models/knight-path.model";
import {KnightMove} from "./models/knight-move.model";

@Injectable({
  providedIn: 'root'
})
export class SoftinnotecKnightsTourService {

  private path: KnightPath = new KnightPath();

  configService = inject(SoftinnotecConfigService)
  private fileLength: number = this.configService.boardSize.fileLength;
  private rankLength: number = this.configService.boardSize.rankLength;

  constructor() { }

  findNextMove() : KnightMove {
      return this.getRandomFirstMove();
  }

  private getRandomFirstMove(): KnightMove {
    const x = Math.floor(Math.random() * this.fileLength) + 1;
    const y = Math.floor(Math.random() * this.rankLength) + 1;
    const firstMove: KnightMove = {x, y, forward: true};
    this.path.addMove(firstMove);
    return firstMove;
  }

  setFileLength(fileLength: number) {
    this.fileLength = fileLength;
  }

  setRankLength(rankLength: number) {
    this.rankLength = rankLength;
  }

  isGameFinished(): boolean {
    return true;
  }
}
