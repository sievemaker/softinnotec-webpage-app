import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SoftinnotecChessboardComponent} from "./softinnotec-chessboard/softinnotec-chessboard.component";

@Component({
    selector: 'app-root',
    imports: [SoftinnotecChessboardComponent],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'softinnotec-webpage-app';
}
