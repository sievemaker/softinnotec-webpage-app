import {Component, input} from '@angular/core';
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
export class SoftinnotecChessboardComponent {
  fileLength = input(8);
  rankLength = input(8);
}
